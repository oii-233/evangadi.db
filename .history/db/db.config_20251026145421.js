require('dotenv').config();

const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
  host: process.env.HOST,  
  user: process.env.USER,  
  database: process.env.DATABASE, 
  password: process.env.PASSWORD,
  port: process.env.PORT,
  connectionLimit: 10
}).promise();

module.exports = dbConnection;