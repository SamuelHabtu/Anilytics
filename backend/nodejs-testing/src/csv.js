import { parse } from "csv-parse";
import { createReadStream } from "node:fs";
import pgPromise from "pg-promise";

export default class CsvToPostgres {
  parser;
  dataArray = [];
  totalCounter = 0;
  counter = 0;
  table;
  pgp = pgPromise();
  db;
  columns;

  /**
   *
   * @param {*} config - Database config
   */
  constructor(config) {
    this.db = this.pgp(config);
  }

  get dataArray() {
    return this.dataArray;
  }

  /**
   * Takes in a csv filename and inserts each row into the Postgres table
   * @param {String} fileName - Name of CSV
   * @param {Object} table - Table with column and table name in db
   * @param {Number} start - row to start, default 2
   * @returns {Promise} Promise Resolving into array
   */
  read = async (fileName, table, start) => {
    this.parser = parse({
      columns: table.columns,
      delimiter: ",",
      from: start ? start : 2,
    });

    this.table = table;
    this.setCsvParser();

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
   * Sets listeners for parser
   * 'readable' - when parser is passed csv data
   * 'error' - when parser errors
   * 'end' - happens when parser reaches end
   */
  setCsvParser = () => {
    this.parser.on("readable", async () => {
      let data;
      while ((data = this.parser.read()) !== null) {
        this.dataArray.push(data);
        this.counter++;
        this.totalCounter++;

        if (this.counter === 10000) {
          const insertString = this.pgp.helpers
            .insert(this.dataArray, this.table.columns, this.table.table)
            .replaceAll(`'Unknown'`, "NULL");
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
      // Inserts remaining data
      if (this.dataArray.length > 0) {
        console.log(this.totalCounter);
        let insertString = this.pgp.helpers
          .insert(this.dataArray, this.table.columns, this.table.table)
          .replaceAll(`'Unknown'`, "NULL");
        await this.db.none(insertString + " ON CONFLICT DO NOTHING");
      }
      this.counter = 0;
      this.totalCounter = 0;
      this.dataArray = [];
      console.log("Parsing Done");
    });
  };
}

/* ----------------------References------------------------------ */
// https://stackoverflow.com/questions/58431076/how-to-use-async-await-with-fs-createreadstream-in-node-js
// https://stackoverflow.com/questions/70556960/does-csv-parse-allow-you-to-read-from-file
