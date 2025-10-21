const express = require("express");
const app = express();
const port = 5500

// user routes middlware file


app.listen(port,(err) =>{
    if (err) {
        console.log(err.message);
    }
    else{
        console.log(`listening on ${port}`);
    }
})