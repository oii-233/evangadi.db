const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

async function authMiddleware (req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(StatusCodes.UNAUTHORIZED).json({  msg: "Authentication invalid" })
    }

    try {
        const da = jwt.verify(authHeader, "secret")
        return res.status(StatusCodes.OK).json({data})
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Authentication invalid" })
    }
}
module.exports = authMiddleware