CREATE TABLE rating_complete(
  user_id INT NOT NULL,
  anime_id INT NOT NULL,
  rating DECIMAL(4,2),
  PRIMARY KEY(user_id,anime_id)
);