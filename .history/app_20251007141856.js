const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
    user:"evangadi.admin",
    database:"evangadi.db",
    host:"localhost",
    password:"123456",
    connectionLimit:10
})

dbConnection.execute("select 'test' as result", (err,results) =>{
    if (err) {
        console.error("❌ Error connecting to mysql:",err);
    } else {
        console.log("Connection successful Result:",results);
    }
});