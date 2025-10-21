function register(req, res) {
    res.send("registor")
}

function login(req, res) {
    res.send("login")
}

function checkUser(req, res) {
    res.send("check user")
}

module.exports = {
    register,
    login,
    checkUser
}
