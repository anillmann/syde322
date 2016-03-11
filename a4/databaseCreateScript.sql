create database hotel;
use hotel;

create table hotel (
	hotelId integer not null auto_increment,
    hotelName varchar(255), 
    city varchar(255),
    primary key (hotelId),
    constraint uq_hotel unique (hotelName, city)
);

create table room (
	hotelId integer, 
    roomNo integer, 
    price numeric(15,2), 
    type varchar(255),
    primary key (hotelId, roomNo),
    constraint fk_room_hotelId foreign key (hotelId) references hotel(hotelId)
);

create table guest (
	guestId integer not null auto_increment, 
    guestAddress varchar(255), 
    guestName varchar(255),
    primary key (guestId), 
    constraint uq_guest unique (guestAddress, guestName)
);

create table booking (
    bookingId integer not null auto_increment,
    hotelId integer,
    roomNo integer, 
    guestId integer, 
    startDate date,
    endDate date,
    primary key (bookingId),
    constraint uq_booking unique (hotelId, roomNo, guestId, startDate),
    constraint fk_booking_hotelId foreign key (hotelId) references hotel(hotelId),
    constraint fk_booking_guestId foreign key (guestId) references guest(guestId)
);

/* a view */
CREATE  OR REPLACE VIEW v_rooms AS
select h.hotelId as 'hotelId',
    h.hotelName as 'hotelName',
    h.city as 'city',
    r.roomNo as 'roomNo',
    r.price as 'price',
    r.type as 'type'
from hotel h
inner join room r on h.hotelId=r.hotelId;
CREATE  OR REPLACE VIEW v_rooms AS
select b.bookingId as 'bookingId',
    h.hotelId as 'hotelId',
    h.hotelName as 'hotelName',
    h.city as 'city',
    r.roomNo as 'roomNo',
    r.price as 'price',
    r.type as 'type'
from hotel h
left join room r on h.hotelId=r.hotelId;


/* Sample Data */
INSERT INTO `hotel`.`hotel` (`hotelName`, `city`) VALUES ('Seatle Best', 'Seatle');
INSERT INTO `hotel`.`hotel` (`hotelName`, `city`) VALUES ('Seatle Choice', 'Seatle');
INSERT INTO `hotel`.`hotel` (`hotelName`, `city`) VALUES ('High Rise', 'New York');
INSERT INTO `hotel`.`hotel` (`hotelName`, `city`) VALUES ('High Roller', 'Las Vegas');
INSERT INTO `hotel`.`hotel` (`hotelName`, `city`) VALUES ('Royal Palace', 'London');

INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('1', '101', '129', 'standard');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('1', '102', '129', 'standard');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('1', '103', '129', 'standard');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('1', '104', '149', 'deluxe');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('1', '105', '149', 'deluxe');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('1', '201', '249', 'suite');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('1', '202', '249', 'suite');

INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('2', '101', '99', 'standard');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('2', '102', '99', 'standard');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('2', '103', '99', 'standard');

INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('3', '1101', '349', 'standard');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('3', '1102', '349', 'standard');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('3', '1103', '399', 'deluxe');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('3', '4901', '1499', 'penthouse');

INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('4', '101', '299', 'deluxe');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('4', '102', '299', 'deluxe');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('4', '201', '399', 'suite');

INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('5', '101', '499', 'suite');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('5', '102', '499', 'suite');
INSERT INTO `hotel`.`room` (`hotelId`, `roomNo`, `price`, `type`) VALUES ('5', '103', '499', 'suite');


