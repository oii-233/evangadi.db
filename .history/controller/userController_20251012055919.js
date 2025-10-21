const e = require("express");
const dbConnection = require("../db/db.config")

async function register(req, res) {
    const { usern}
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
