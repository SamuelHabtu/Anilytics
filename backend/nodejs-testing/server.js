import CsvToPostgres from "./src/csv.js";
import dotenv from "dotenv";
import {
  watching_status,
  anime,
  animelist,
  rating_complete,
} from "./src/tables.js";
dotenv.config();

const config = {
  host: process.env.DB_ADDRESS,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
};

const parser = new CsvToPostgres(config);

// Uncomment one at a time and run, still need to fix so all can be run sequentially, something with promises
try {
  // await parser.read("../data/watching_status.csv", watching_status);
  // await parser.read("../data/anime.csv", anime);
  // await parser.read("../data/rating_complete.csv", rating_complete);
  // await parser.read("../data/animelist.csv", animelist);
} catch (e) {
  console.log(e);
}
