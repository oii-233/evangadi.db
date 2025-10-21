const express = require("express");
const app = express();
const port = 5500

// db connection
const dbConnection = require("./db/db.config")

// user routes middlware file
const userRoutes = require("./routes/userRoute")
app.use("/api/users", userRoutes)

async function start() {
    try {
        const result = await dbConnection.execute("select 'test' ") 
        await app.listen(port)
        console.log("✅database connection established")
        console.log( `listening on ${port}`)      
    } catch (error) {
        console.log(error.message)
    }
}
start()

