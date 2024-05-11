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
    "core-10",
    "score-9",
    "score-8",
    "score-7",
    "score-6",
    "score-5",
    "score-4",
    "score-3",
    "score-2",
    "score-1",
  ],
  table: "anime",
};

export const animelist = {
  columns: [
    "user_id",
    "anime_id",
    "rating",
    "watching_status",
    "watched_episodes",
  ],
  table: "animelist",
};
export const rating_complete = {
  columns: ["user_id", "anime_id", "rating"],
  table: "rating_complete",
};
