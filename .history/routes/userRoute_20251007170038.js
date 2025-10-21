const express = require("express");
const router = express.Router();

// registor route
router.post("/register",register)

// login user
router.post("/login",login)

// check user
router.get("/check", checkUser)

module.exports = router