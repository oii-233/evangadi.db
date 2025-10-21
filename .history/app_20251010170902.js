const express = require("express");
const app = express();
const port = 5500

// db connection
const dbConnection = require("./db/db.config")

// user routes middlware file
const userRoutes = require("./routes/userRoute")
app.use("/api/users", userRoutes)

async function start

app.listen(port,(err) =>{
    if (err) {
        console.log("❌ Server error:",err.message);
    }
    else{
        console.log(`✅ Server running on http://localhost:${port}`);
    }
})