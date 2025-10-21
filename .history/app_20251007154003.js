const express = require("express");
const app = express();
const port = 5500

// registor route
app.post("/api/users/register",(req,res) => {
    res.send{"register user"}
})

// login user
app.post("/api/users/login", (req,res) => {
    res.send{"login user"}
})

//

app.listen(port,(err) =>{
    if (err) {
        console.log(err.message);
    }
    else{
        console.log(`listening on ${port}`);
    }
})