

create table basicinfo (
  userid int not null AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  zipcode int not null,
  primary key (userid),
  foreign key (campaignid) REFERENCES campaign(campaignid),
);

create table campaign (
  campaignid int not null AUTO_INCREMENT,
monthlyspend int not null,
  campaignrunning boolean default False,
  primary key (campaignid),
  foreign key (userid) REFERENCES basicinfo(userid),
);
