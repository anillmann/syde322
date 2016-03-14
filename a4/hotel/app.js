//  Node Modules  //
var mysql = require('mysql');
var squel = require('squel');
var prompt = require('prompt');
require('console.table');

//  Database Connection  //
var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'hotel'
});

//  Variables need to run the program  //
var sqlGen = new SqlGen;
conn.connect();  // start DB connection
main();

//  Program Functions  //
function main () {
	prompt.start();
	console.log('Select an Action:');
	console.log(' 1) Guest Registration');
	console.log(' 2) Get List of Guests');
	console.log(' 3) Search Available Rooms');
	console.log(' 4) Create Booking');
	console.log(' 5) Search Bookings');
	console.log(' 0) Exit');
	prompt.get(['actionNumber'], function (err, result) {
		//console.log(result.actionNumber);
		switch (Number(result.actionNumber)) {
			case 1 : 
				guestRegistration();
				break;
			case 2 : 
				getGuests();
				break;
			case 3 :
				searchRooms();
				break;
			case 4 :
				insertBooking();
				break;
			case 5 :
				searchBookings();
				break;
			case 0 :
				spaces();
				console.log("Thank You, Goodbye ...");
				conn.end();  // end DB connection
				spaces();
				break;
			default :
				spaces();
				console.log("Invalid Selection");
				main();
				break;
		}
	});
}

function guestRegistration () {
	spaces();
	console.log('Starting Guest Registration ...');
	prompt.get(['guestAddress', 'guestName'], function (err, result) {
	    var guestAddress = result.guestAddress.toString().trim();
	    var guestName = result.guestName.toString().trim();

		conn.query(sqlGen.guestRegistration(guestAddress,guestName), function (err, results) {
			if (err) {
				console.log("Guest creation failed. Check guest does not already exist.");
				spaces();
				main()
			} else {
				spaces();
				main();
			}
		});
	});
}

function getGuests() {
	conn.query(sqlGen.getGuests(), function (err, results) {
		if (err) {
			console.log(err);
		} else {
			spaces();
			console.log('Guests in the system:\n')
			console.table(results);
		}
		spaces();
		main();
	});
}

function insertBooking () {
	spaces();
	console.log("Preparing to enter booking ...\n");
	console.log("Enter dates in format 'YYYY-MM-DD'");

	prompt.get(['hotelId','roomNo','guestId','startDate','endDate'], function (err, result) {
		var hotelId = Number(result.hotelId);
		var roomNo = Number(result.roomNo);
		var guestId = Number(result.guestId);
		var startDate = result.startDate.toString().trim();
		var endDate = result.endDate.toString().trim();

		if (validDate(startDate) || validDate(endDate)) {
			if (dateToInt(startDate) < dateToInt(endDate)) {
				// no primary key on room, so we cant verify room no is a valid entry in the insert statement
				// therefore run a query to check if the room exists
				spaces();
				console.log("Dates valid. Processing request...");
				conn.query(sqlGen.checkRoomExists(hotelId,roomNo), function (err, results) {
					if (results[0].roomExists > 0) {
						conn.query(sqlGen.insertBooking(hotelId,roomNo,guestId,startDate,endDate), function (err, results) {
							if (err) {
								console.log("Booking failed. Check parameters are unique.  See:");
								console.log(err);
								spaces();
								main();
							} else {
								// get the last insert id, which will be for the booking
								conn.query(sqlGen.lastId(), function (err, results) {
									console.log("Booking success. Your booking reference is #" + results[0].lastId);
									console.log("Booking complete.");
									spaces();
									main();
								});
							}
						});
					} else {
						console.log("Booking failed. Room number not valid.");
						spaces();
						main();
					}
				});				
			} else {
				spaces();
				console.log("Booking failed. Start date must be before end date.");
				spaces();
				main();
			}
		} else {
			spaces();
			console.log("Booking failed. Enter dates in valid form");
			spaces()
			main();
		}
	});
}

function searchBookings () {
	spaces();
	console.log("Preparing to search bookings ...\n");
	console.log("Date parameters mandatory, remainder optional.")
	console.log("Enter dates in format 'YYYY-MM-DD'");	

	prompt.get(['startDate','endDate','hotelName','city','roomPrice','roomType'], function (err, result) {
		var startDate = result.startDate.toString().trim();
		var endDate = result.endDate.toString().trim();
		var hotelName = result.hotelName.toString().trim();
		var city = result.city.toString().trim();
		var roomPrice = Number(result.roomPrice);
		var roomType = result.roomType.toString().trim();

		if (validDate(startDate) || validDate(endDate)) {
			if (dateToInt(startDate) < dateToInt(endDate)) {
				// no primary key on room, so we cant verify room no is a valid entry in the insert statement
				// therefore run a query to check if the room exists
				spaces();
				console.log("Dates valid. Processing request...");
				//console.log(sqlGen.searchBookings(true,startDate,endDate,hotelName,city,roomPrice,roomType));
				conn.query(sqlGen.searchBookings(true,startDate,endDate,hotelName,city,roomPrice,roomType), function (err, results) {
					if (err) {
						console.log(err);
					} else {
						if (results.length == 0 ) {
							console.log('\n');
							console.log("No bookings matching search criteria.");
						} else {
							console.log('\n');
							console.table(results);
						}
					}
					spaces();
					main();
				});
			} else {
				spaces();
				console.log("Booking failed. Start date must be before end date.");
				spaces();
				main();
			}
		} else {
			spaces();
			console.log("Booking failed. Enter dates in valid form");
			spaces()
			main();
		}
	});
}

function searchRooms () {
	spaces();
	console.log("Preparing to search available rooms ...\n");
	console.log("Date parameters mandatory, remainder optional.")
	console.log("Enter dates in format 'YYYY-MM-DD'");	

	prompt.get(['startDate','endDate','hotelName','city','roomPrice','roomType'], function (err, result) {
		var startDate = result.startDate.toString().trim();
		var endDate = result.endDate.toString().trim();
		var hotelName = result.hotelName.toString().trim();
		var city = result.city.toString().trim();
		var roomPrice = Number(result.roomPrice);
		var roomType = result.roomType.toString().trim();

		if (validDate(startDate) || validDate(endDate)) {
			if (dateToInt(startDate) < dateToInt(endDate)) {
				// no primary key on room, so we cant verify room no is a valid entry in the insert statement
				// therefore run a query to check if the room exists
				spaces();
				console.log("Dates valid. Processing request...");
				//console.log(sqlGen.searchBookings(true,startDate,endDate,hotelName,city,roomPrice,roomType));
				conn.query(sqlGen.searchBookings(true,startDate,endDate), function (err, results) {
					if (err) {
						console.log(err);
						console.log('tried\n');
						console.log(sqlGen.searchBookings(true,startDate,endDate));
						spaces();
						main();
					} else {
						//console.log('tried\n');
						//console.log(sqlGen.searchBookings(true,startDate,endDate));
						//console.table(results);
						var params = [];

						if (results.length > 0 ) {
							for (i=0;i<results.length;i++) {
								params.push([results[i].hotelId, results[i].roomNo]);
							}
						}	
						conn.query(sqlGen.searchRooms(params, hotelName, city, roomPrice, roomType), function (err, results) {
							if (err) {
								console.log(err);
								console.log('tried\n');
								console.log(sqlGen.searchRooms(params, hotelName, city, roomPrice, roomType));
							} else {
								//console.log('\n');
								//console.log(sqlGen.searchRooms(params, hotelName, city, roomPrice, roomType));
								console.table(results);
							}
							spaces();
							main();
						});
					}
				});
			} else {
				spaces();
				console.log("Booking failed. Start date must be before end date.");
				spaces();
				main();
			}
		} else {
			spaces();
			console.log("Booking failed. Enter dates in valid form");
			spaces()
			main();
		}
	});
}

//  a factory to generate sql strings  //
function SqlGen () {
	this.guestRegistration = function (guestAddress, guestName) {
		var sqlStr = squel.insert()
							.into("guest")
							.set("guestAddress", "'"+guestAddress+"'")
							.set("guestName", "'"+guestName+"'")
							.toString();
		return sqlStr;
	}
	this.getGuests = function () {
		var sqlStr = squel.select()
							.from("guest")
							.order("guestId")
							.toString();
		return sqlStr;
	}
	this.insertBooking = function (hotelId, roomNo, guestId, startDate, endDate) {
		var sqlStr = squel.insert()
							.into("booking")
							.set("hotelId",hotelId)
							.set("roomNo",roomNo)
							.set("guestId",guestId)
							.set("startDate","'"+startDate+"'")
							.set("endDate","'"+endDate+"'")
							.toString();
		return sqlStr;
	}
	this.lastId = function () {
		return "SELECT LAST_INSERT_ID() AS 'lastId';"
	}
	this.checkRoomExists = function (hotelId, roomNo) {
		var sqlStr = squel.select()
							.from("room")
							.field("count(*)", "roomExists")
							.where("hotelId="+hotelId)
							.where("roomNo="+roomNo)
							.toString();
		return sqlStr;
	}
	this.searchBookings = function (formatted, startDate, endDate, hotelName, city, roomPrice, roomType) {
		var params = {'hotelName' : hotelName,
						'city' : city,
						'price' : roomPrice,
						'type' : roomType};
		var sql = squel.select()
							.from("v_bookings");
		if (formatted) {
			sql = sql.field('bookingId')
						.field('city')
						.field('hotelId')
						.field('hotelName')
						.field('roomNo')
						.field('price')
						.field('type')
						.field("DATE_FORMAT(startDate,'%Y-%m-%d')","startDate")
						.field("DATE_FORMAT(endDate,'%Y-%m-%d')","endDate");
		}			
		sql = sql.where(
					// either the search startDate is in between start and end date
					// or the search endDate is in between start and end date
					squel.expr()
						.or_begin()
							.and("startDate<='"+startDate+"'")
							.and("endDate>='"+startDate+"'")
						.end()
						.or_begin()
							.and("startDate<='"+endDate+"'")
							.and("endDate>='"+endDate+"'")
						.end()
				);
		// append where clauses for options search elements
		for (x in params) {
			if (params[x] != undefined && (params[x] != "" || params[x] != 0)) {
				sql = sql.where(x+"='"+params[x]+"'");
			}
		}
		return sql.toString();
	}
	this.searchRooms = function (params, hotelName, city, roomPrice, roomType) {
		var sqlParams = {'hotelName' : hotelName,
						'city' : city,
						'type' : roomPrice,
						'price' : roomType};
		var exp = squel.expr()
		for (i=0;i<params.length;i++) {
			exp = exp.and_begin().or('hotelId<>'+params[i][0]).or('roomNo<>'+params[i][1]).end();
		}
		var sql = squel.select()
						.from('v_rooms')
						.where(exp);
		for (x in sqlParams) {
			if (sqlParams[x] != undefined && (sqlParams[x] != "" || sqlParams[x] != 0)) {
				sql = sql.where(x+"='"+sqlParams[x]+"'");
			}
		}				
		sql = sql.order('hotelId').order('roomNo');
		return sql.toString();
	}
}

function spaces () {
	console.log('\n**************************************************\n')
}

// very basic function to check dates
// not comprehensive, but will get through a bunch of cases
function validDate (date) {
	var month = date.substr(5,2);
	var day = date.substr(8,2);
	//console.log(date.length);
	if ( date.length != 10 ) {
		return false;
	} else {
		if ( date.substr(4,1) != "-" || date.substr(7,1) != "-" ) {
			return false;
		} else {
			if ( month > 0 && month <= 12 || day > 0 && day <= 31) {
				return true;
			} else {
				return false;
			}
		}
	}
}

function dateToInt (date) {
	var year = date.substr(0,4);
	var month = date.substr(5,2);
	var day = date.substr(8,2);
	return Number(year+month+day);
}




