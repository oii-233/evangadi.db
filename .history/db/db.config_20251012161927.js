const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
    user:"root",
    database:"evangadi",
    host:"localhost",
    password:"123456",
    port:3306,
    connectionLimit:10
})

//dbConnection.execute("select 'test' as result", (err,results) =>{
//  if (err) {
//      console.error("❌ Error connecting to mysql:",err);
//  } else {
//  console.log("✅ Connection successful Result:",results);
//  }
//});

module.exports = dbConnection.promise()