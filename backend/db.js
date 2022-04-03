"use strict";

/** Database setup **/

const { Client } = require("pg");
const { getDatabaseURI } = require("./config");

let dbName; //set with desired name of database for project

// TODO- uncomment once above has been set
// const db = new Client({
//   connectionString: getDatabaseURI(dbName),
// });
// db.connect();

module.exports = db; //will be imported in models to interact with database from within class methods
