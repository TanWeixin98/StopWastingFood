create table Restaurant(
	userName char(25) primary key,
    userPass char(20),
    restaurantName char(30),
    address varchar(100),
    earnedPoint  int default 0
);

create table FoodShelter(
	userName char(25) primary key ,
    userPass char(20) not null,
    organizationName char(30) not null,
    address varchar(100)
);

commit;