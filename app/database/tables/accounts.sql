create table certificates (
  id int primary key auto_increment NOT NULL,
  account varchar(255),
  password varchar(255),
  status varchar(255),
  count integer default 0,
  monitoring BOOLEAN default TRUE,
  createdAt datetime,
  updatedAt datetime
);