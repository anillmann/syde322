//  Node Modules  //
var mysql = require('mysql');
var squel = require('squel');
var prompt = require('prompt');

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
	// start command prompt
	spaces();
	console.log('Starting Guest Registration ...');
	prompt.get(['guestAddress', 'guestName'], function (err, result) {
	    var guestAddress = result.guestAddress;
	    var guestName = result.guestName;

		conn.query(sqlGen.guestRegistration(guestAddress,guestName), function (err, results) {
			if (err) {
				console.log(err);
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
			console.log("Guests in the system:")
			for (x in results) {
				console.log(" guestId:" + results[x].guestId + " - " + results[x].guestName + ' @ ' + results[x].guestAddress);
			}
		}

		spaces();
		main();
	});
}

//  a factory to generate sql strings  //
function SqlGen () {
	this.guestRegistration = function (guestAddress, guestName) {
		var sqlStr = squel.insert()
							.into("guest")
							.set("guestAddress", guestAddress)
							.set("guestName", guestName)
							.toString();
		return sqlStr;
	}
	this.getGuests = function () {
		var sqlStr = squel.select()
							.from("guest")
							.toString();
		return sqlStr;
	}
}

function spaces () {
	console.log('\n**************************************************\n')
}




