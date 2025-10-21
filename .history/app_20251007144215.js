const express = require("express");
const app = express();
const port = 30000

app.listen(port,(err) =>{
    if (err) {
        console.log(err.message);
    }
    else{
        console.log(`listening on ${port}`);
    }
})