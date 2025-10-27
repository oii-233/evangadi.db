require('dotenv').config()

const express = require("express");
const app = express();
const port = 5500

// db connection
const dbConnection = require("./db/db.config")

app.use(express.json())
// user routes middlware file
const userRoutes = require("./routes/userRoute")

// user routes middleware file
const questionsRotes = require("./routes/questionRoute")
// authonthication middleware
const authMiddleware = require("./middleware/authMiddleware") 

// json middlewareto exact json data
app.use(express.json())

// user routes middlware
app.use("/api/users", userRoutes)
app.use("/api/questions", authMiddleware, questionsRotes)
app.use("/api/answer", authMiddleware, questionsRotes)

async function start() {
    try {
        const result = await dbConnection.execute("select 'test' ") 
        await app.listen(port)
        console.log("✅database connection established")
        console.log( `listening on ${port}`)      
    } catch (error) {
        console.log(" ❌ Database connection failes:", error)
    }
}
start()

