const e = require("express");
const dbConnection = require("../db/db.config")
const bcrypt = require("bcrypt");
const { StatusCodes } = require('http-status-codes')

async function register(req, res) {
    const { username, firstname, lastname, email, password} = req.body;

    if (!email || !password || !firstname || !lastname || !username) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please provide all required fields"})
    }

    try {

        const [user] = await dbConnection.query("select username,userid from users where username = ? or email = ? ",[username,email])
        if (user.length > 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "user already existed"})
        }

        if (password.length <= 8) {
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "password must be at least 8 characters" })
        }

        // encrypt the password
        const salt = await bcrypt.genSalt(10)

        const hashPassword = await bcrypt.hash(password, salt)

        await dbConnection.query("INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?) ", [username, firstname, lastname, email, hashPassword])
        return res.status(StatusCodes.CREATED).json({ msg: "usee register"})
    } catch (error) {
        console.error("❌ Error during register:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });

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
