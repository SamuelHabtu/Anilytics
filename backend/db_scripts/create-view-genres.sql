UPDATE anime
SET genres = 
  REPLACE(
    REPLACE(
      REPLACE(
        REPLACE(
          REPLACE(genres,'Sci-Fi','Sci_Fi')
        ,'Slice of Life','Slice_of_Life')
      ,'Shounen Ai','Shounen_Ai')
    ,'Super Power','Super_Power')
  ,'Martial Arts','Martial_Arts')

DROP VIEW anime_genres

CREATE VIEW anime_genres AS
SELECT 
  anime_id,
  split_part(genres,',',1) as genre_1,
  split_part(genres,',',2) as genre_2,
  split_part(genres,',',3) as genre_3,
  split_part(genres,',',4) as genre_4,
  split_part(genres,',',5) as genre_5,
  split_part(genres,',',6) as genre_6,
  split_part(genres,',',7) as genre_7,
  split_part(genres,',',8) as genre_8,
  split_part(genres,',',9) as genre_9,
  split_part(genres,',',10) as genre_10,
  split_part(genres,',',11) as genre_11,
  split_part(genres,',',12) as genre_12,
  split_part(genres,',',13) as genre_13,
  split_part(genres,',',14) as genre_14,
  split_part(genres,',',15) as genre_15,
  split_part(genres,',',16) as genre_16,
  split_part(genres,',',17) as genre_17
FROM anime;

SELECT DISTINCT genre_1 FROM anime_genres where genre_1 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_2 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_3 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_4 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_5 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_6 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_7 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_8 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_9 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_10 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_11 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_12 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_13 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_14 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_15 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_16 IS NOT NULL UNION
SELECT DISTINCT genre_1 FROM anime_genres where genre_17 IS NOT NULL;