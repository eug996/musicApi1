/* Initialize DB with some seed data */
USE `music_library_api_1_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");


INSERT INTO Artists (name, genre)
VALUES 
("The Beatles","Rock"),
("Elvis Presley","Pop"),
("Jimi Hendrix","Rock"),
("Burna Boy", "Afrobeats"),
("Wizkid","Afrobeats"),
("Lil-baby","Rap"),
("Lil-Baby","Rap");

INSERT INTO Albums (artist_id, name, year)
VALUES
(1,"Abbey Road", 1969 ),
(2,"How Great Thou Art", 1967),
(3,"Woodstock", 1994),
(4,"African Giant",2019),
(5,"Made in Lagos",2020),
(6,"My Turn",2020),
(6,"It's Only Me", 2022);

INSERT INTO Songs (artist_id, album_id, name )
VALUES
(1, 1, "Come Together"),
(2, 2, "By and By"),
(3, 3, "Purple Haze"),
(4, 4, "Anybody"),
(4,4,"African Giant"),
(5, 5, "Mighty Wine"),
(6, 6,"Emotionally Scarred"),
(6, 6, "California Breeze");

