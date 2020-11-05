CREATE TABLE Complete (
  ID SERIAL PRIMARY KEY,
  endName VARCHAR(50) NOT NULL
);

CREATE TABLE Play (
  ID SERIAL PRIMARY KEY,
  pageID VARCHAR(255),
  pageTag VARCHAR(50)
);

/* Test data */

INSERT INTO Complete (endName) VALUES ('myrtle');
INSERT INTO Complete (endName) VALUES ('myrtle');
INSERT INTO Complete (endName) VALUES ('bruce');
INSERT INTO Complete (endName) VALUES ('blade');

/* 

To init the db on Heroku, run:

$ heroku login
$ heroku pg:psql --app interact-game < init.sql 

*/