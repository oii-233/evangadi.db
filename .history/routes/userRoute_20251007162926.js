const express = require("express");
const router = express.Router();

// registor route
router.post("/api/users/register",(req,res) => {
    res.send("register user")
})

// login user
router.post("/api/users/login", (req,res) => {
    res.send("login user")
})

// check user
router.get("/api/users/check", (req,res) =>{
    res.send("check useer")
})
