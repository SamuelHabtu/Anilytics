import { parse } from "csv-parse";
import { createReadStream } from "node:fs";
import pgPromise from "pg-promise";

export class CsvToArray {
  parser;
  dataArray = [];
  totalCounter = 0;
  counter = 0;
  table;
  pgp = pgPromise();
  db;

  constructor(config, columns) {
    this.parser = parse({ columns: columns, delimiter: ",", from: 2 });
    this.db = this.pgp(config);

    this.parser.on("readable", async () => {
      let data;
      while ((data = this.parser.read()) !== null) {
        this.dataArray.push(data);
        this.counter++;
        this.totalCounter++;
        if (this.counter === 10000) {
          const insertString = this.pgp.helpers
            .insert(this.dataArray, this.table.columns, this.table.table)
            .replace("'Unknown'", "NULL");
          this.counter = 0;
          this.dataArray = [];
          console.log(this.totalCounter);
          await this.db.none(insertString + " ON CONFLICT DO NOTHING");
        }
      }
    });

    this.parser.on("error", (err) => {
      console.log(err);
    });

    this.parser.on("end", async () => {
      if (this.dataArray.length > 0) {
        let insertString = this.pgp.helpers
          .insert(this.dataArray, this.table.columns, this.table.table)
          .replaceAll(`'Unknown'`, "NULL");

        await this.db.none(insertString + " ON CONFLICT DO NOTHING");
      }
      console.log("Parsing Done");
    });
  }

  get dataArray() {
    return this.dataArray;
  }

  /**
   * Takes in a csv filename and puts data into an array
   * @param {String} fileName
   * @returns {Promise} Promise Resolving into array
   */
  read = async (fileName, table) => {
    this.table = table;
    return new Promise((resolve, reject) => {
      try {
        createReadStream(fileName)
          .pipe(this.parser)
          .on("end", () => {
            console.log("CSV upload done");
            resolve(this.dataArray);
          })
          .on("error", reject);
      } catch (e) {
        console.log(e);
      }
    });
  };

  /**
   * Clears object array
   */
  clear = () => {
    this.dataArray = [];
  };
}

/* ----------------------References------------------------------ */
// https://stackoverflow.com/questions/58431076/how-to-use-async-await-with-fs-createreadstream-in-node-js
// https://stackoverflow.com/questions/70556960/does-csv-parse-allow-you-to-read-from-file
