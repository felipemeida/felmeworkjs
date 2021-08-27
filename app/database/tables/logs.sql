create table logs (
  id int primary key auto_increment NOT NULL,
  message varchar(255),
  info varchar(255),
  tags varchar(255),
  createdAt datetime,
  updatedAt datetime
);