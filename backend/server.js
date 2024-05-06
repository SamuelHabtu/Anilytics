import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

var app = express();
const router = express.Router();

app.use(morgan("dev"));
app.use(express.json()); //body parsing
app.use(express.urlencoded({ extended: true })); //query string
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);

app.use(router.get("/"), (req, res) => {
  res.status(200).send("Recieved");
});

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
