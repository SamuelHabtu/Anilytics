import dotenv from "dotenv";
import CsvToDb from "@batec2/csvtodb";
import {
  watching_status,
  anime,
  animelist,
  rating_complete,
} from "./src/tables.js";
import pgPromise from "pg-promise";
import { user_genre_count } from "./src/tables.js";

dotenv.config();

const config = {
  host: process.env.DB_ADDRESS,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
};

const create_user_genre_count = async () => {
  const pgp = pgPromise();
  const db = pgp(config);
  const columnSet = new pgp.helpers.ColumnSet(user_genre_count.columns, {
    table: user_genre_count.table,
  });

  try {
    const user_ids = await db.any("SELECT DISTINCT user_id from animelist");
    let animeCount = [];
    let counter = 0;
    let totalCounter = 0;
    for (const user of user_ids) {
      const animelist = await db.any(
        `SELECT
        user_id, 
        genre_1,
        genre_2,
        genre_3,
        genre_4,
        genre_5,
        genre_6,
        genre_7,
        genre_8,
        genre_9,
        genre_10,
        genre_11,
        genre_12,
        genre_13,
        genre_14,
        genre_15,
        genre_16,
        genre_17 
        FROM anime_animelist where user_id=$1`,
        [user.user_id]
      );

      const userCount = {
        user_id: user.user_id,
        game: 0,
        comedy: 0,
        sci_fi: 0,
        romance: 0,
        mecha: 0,
        psychological: 0,
        harem: 0,
        magic: 0,
        martial_arts: 0,
        sports: 0,
        kids: 0,
        adventure: 0,
        shounen: 0,
        police: 0,
        military: 0,
        super_power: 0,
        seinen: 0,
        space: 0,
        parody: 0,
        hentai: 0,
        samurai: 0,
        yaoi: 0,
        shounen_ai: 0,
        thriller: 0,
        ecchi: 0,
        supernatural: 0,
        school: 0,
        music: 0,
        slice_of_life: 0,
        drama: 0,
        mystery: 0,
        dementia: 0,
        fantasy: 0,
        vampire: 0,
        action: 0,
        shoujo: 0,
        cars: 0,
        josei: 0,
        horror: 0,
        historical: 0,
        demons: 0,
      };

      for (const anime of animelist) {
        const values = Object.values(anime);
        values.forEach((value) => {
          if (typeof value !== "string") {
            return;
          }
          const valueNoSpace = value.replace(" ", "").toLowerCase();
          if (
            userCount.hasOwnProperty(valueNoSpace) &&
            valueNoSpace !== "user_id"
          ) {
            userCount[valueNoSpace]++;
          }
        });
      }
      animeCount.push(userCount);
      counter++;
      totalCounter++;
      if (counter === 10000) {
        const query = pgp.helpers.insert(animeCount, columnSet);
        await db.none(query + "ON CONFLICT DO NOTHING");
        counter = 0;
        animeCount = [];
        console.log(`Inserting: ${totalCounter}`);
      }
    }

    if (animeCount.length !== 0) {
      const query = pgp.helpers.insert(animeCount, columnSet);
      await db.none(query + "ON CONFLICT DO NOTHING");
      counter = 0;
      animeCount = [];
      console.log(`Inserting: ${totalCounter}`);
    }
  } catch (e) {
    console.log(e);
  }
};

// const parser = new CsvToDb(config);

// Uncomment one at a time and run, still need to fix so all can be run sequentially, something with promises
try {
  // await parser.read("./data/watching_status.csv", watching_status);
  // await parser.read("./data/anime.csv", anime);
  // await parser.read("./data/rating_complete.csv", rating_complete);
  // await parser.read("./data/animelist.csv", animelist);
  await create_user_genre_count();
} catch (e) {
  console.log(e);
}
