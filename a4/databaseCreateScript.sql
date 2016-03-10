create database hotel;
use hotel;

create table hotel (
	hotelId integer not null auto_increment,
    hotelName varchar(255), 
    city varchar(255),
    primary key (hotelId)
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
    primary key (guestId)
);

create table booking (
	hotelId integer,
    roomNo integer, 
    guestId integer, 
    startDate date,
    endDate date,
    primary key (hotelId, roomNo, guestId, startDate),
    constraint fk_booking_hotelId foreign key (hotelId) references hotel(hotelId),
    constraint fk_booking_guestId foreign key (guestId) references guest(guestId)
);

