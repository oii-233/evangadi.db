const express = require("express");
const router = express.Router();
 
// user controllers
const { register, login, checkUser} = require("../controller/userController");

// registor route
router.post("/register",register)

// login user
router.post("/login",login)

// check user
router.get("/check", checkUser)

module.exports = router