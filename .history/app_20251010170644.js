const express = require("express");
const app = express();
const port = 5500

// db connection

// user routes middlware file
const userRoutes = require("./routes/userRoute")
app.use("/api/users", userRoutes)

app.listen(port,(err) =>{
    if (err) {
        console.log("❌ Server error:",err.message);
    }
    else{
        console.log(`✅ Server running on http://localhost:${port}`);
    }
})