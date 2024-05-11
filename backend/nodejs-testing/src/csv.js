import { parse } from "csv-parse";
import { createReadStream } from "node:fs";

export class CsvToArray {
  parser = parse({ delimiter: "," });
  dataArray = [];

  constructor() {
    this.parser.on("readable", () => {
      let data;
      while ((data = this.parser.read()) !== null) {
        this.dataArray.push(data);
      }
    });

    this.parser.on("error", (err) => {
      console.log(err);
    });

    this.parser.on("end", () => {
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
  read = async (fileName) => {
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
