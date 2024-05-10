CREATE TABLE animelist(
  user_id INT NOT NULL,
  anime_id INT NOT NULL,
  rating DECIMAL(4,2),
  status SMALLINT,
  PRIMARY KEY(user_id,anime_id)
);