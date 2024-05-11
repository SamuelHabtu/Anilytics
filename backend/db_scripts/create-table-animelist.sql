DROP TABLE animelist;
CREATE TABLE animelist(
  user_id INT NOT NULL,
  anime_id INT NOT NULL,
  rating DECIMAL(4,2) NOT NULL,
  status SMALLINT,
  episodes INT,
  PRIMARY KEY(user_id,anime_id)
);