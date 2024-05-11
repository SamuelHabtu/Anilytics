import express from "express";
import cors from "cors";
import morgan from "morgan";
import { CsvToArray } from "./src/csv.js";
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

const parser = new CsvToArray(config, animelist.columns);

try {
  // await parser.read("../data/animelist.csv", animelist);
} catch (e) {
  console.log(e);
}

// console.log(insertString.replace(`'Unknown'`, "NULL"));
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
