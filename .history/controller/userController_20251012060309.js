const e = require("express");
const dbConnection = require("../db/db.config")

async function register(req, res) {
    const { username, firstname, lastname, email, password} = req.body;

    if (!email || !password || !firstname || !lastname || !username) {
        return res.status(400).json
    }
}

async function login(req, res) {
    res.send("login")
}

async function checkUser(req, res) {
    res.send("check user")
}

module.exports = {
    register,
    login,
    checkUser
}
