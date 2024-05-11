export const watching_status = {
  columns: ["status", "description"],
  table: "watching_status",
};

export const anime = {
  columns: [
    "anime_id",
    "name",
    "score",
    "genres",
    "english_name",
    "japanese_name",
    "type",
    "episodes",
    "aired",
    "premiered",
    "producers",
    "licensors",
    "studios",
    "source",
    "duration",
    "rating",
    "ranked",
    "popularity",
    "members",
    "favorites",
    "watching",
    "completed",
    "on_hold",
    "dropped",
    "plan_to_watch",
    "score_10",
    "score_9",
    "score_8",
    "score_7",
    "score_6",
    "score_5",
    "score_4",
    "score_3",
    "score_2",
    "score_1",
  ],
  table: "anime",
};

export const animelist = {
  columns: ["user_id", "anime_id", "rating", "status", "episodes"],
  table: "animelist",
};
export const rating_complete = {
  columns: ["user_id", "anime_id", "rating"],
  table: "rating_complete",
};
