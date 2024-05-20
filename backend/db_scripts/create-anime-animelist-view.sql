CREATE VIEW anime_join_genres AS
Select
  anime.*,
  anime_genres.genre_1, 
  anime_genres.genre_2, 
  anime_genres.genre_3, 
  anime_genres.genre_4, 
  anime_genres.genre_5, 
  anime_genres.genre_6, 
  anime_genres.genre_7, 
  anime_genres.genre_8, 
  anime_genres.genre_9, 
  anime_genres.genre_10, 
  anime_genres.genre_11, 
  anime_genres.genre_12, 
  anime_genres.genre_13, 
  anime_genres.genre_14, 
  anime_genres.genre_15, 
  anime_genres.genre_16, 
  anime_genres.genre_17
FROM
  anime INNER JOIN anime_genres 
  ON anime.anime_id = anime_genres.anime_id;

CREATE VIEW anime_animelist AS
SELECT 
  anime_join_genres.*, 
  animelist.user_id,
  animelist.rating as user_rating,
  animelist.status,
  animelist.episodes as episodes_watched
FROM 
  anime_join_genres 
  INNER JOIN animelist 
  ON anime_join_genres.anime_id = animelist.anime_id 
