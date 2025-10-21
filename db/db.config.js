require('dotenv').config();

const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
  host: process.env.HOST,  // 127.0.0.1
  user: process.env.USER,  // root
  database: process.env.DATABASE, // evangadi
  password: process.env.PASSWORD,
  port: process.env.PORT,
  connectionLimit: 10
}).promise();

module.exports = dbConnection;