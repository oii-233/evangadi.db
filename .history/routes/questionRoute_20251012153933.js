const express = require("express");
const router = express.Router()

// authonthication middleware
const authMiddleware = require("../middleware/authMiddleware") 

require.get("/all-questions", authMiddleware, (req, res) =>{
    res.send("all questions")
})