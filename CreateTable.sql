create table `websiteSchema`.`Resaturant`(
	userName char(25) primary key,
    userPass char(20),
    restaurantName char(30),
    address varchar(100),
    earnedPoint  int default 0
);

create table `websiteSchema`.`FoodShelter`(
	userName char(25) primary key ,
    userPass char(20) not null,
    organizationName char(30) not null,
    address varchar(100)
);

commit;