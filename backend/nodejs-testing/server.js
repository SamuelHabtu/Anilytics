import express from "express";
import cors from "cors";
import morgan from "morgan";
import { CsvToArray } from "./src/csv.js";
import pgPromise from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const config = {
  host: process.env.DB_ADDRESS,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
};

const pgp = pgPromise();
const db = pgp(config);
const parser = new CsvToArray();

try {
  const data = await parser.read("../data/animelist.csv");
  const dataJSON = data.map((item) => {
    return { status: item[0], description: item[1] };
  });
  console.log(dataJSON.length);
  // const insertString = pgp.helpers.insert(
  //   dataJSON,
  //   ["status", "description"],
  //   "watching_status"
  // );
  // await db.none(insertString);
} catch (e) {
  console.log(e);
}

// var app = express();
// const router = express.Router();

// app.use(morgan("dev"));
// app.use(express.json()); //body parsing
// app.use(express.urlencoded({ extended: true })); //query string
// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
//   })
// );

// app.use(router.get("/"), (req, res) => {
//   res.status(200).send("Recieved");
// });

// app.listen(process.env.PORT, () => {
//   console.log(`server listening on port ${process.env.PORT}`);
// });
