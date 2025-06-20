const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const { SECRATE_TOKEN } = process.env
const authentication = (req, res, next) => {

    const authHead = req.headers["authorization"]


    if (authHead == undefined) {
        res.status(404).json({
            status: "Failure",
            message: "Token is Missed"
        })
    } else {
        const token = authHead.split(" ")[1]
        jwt.verify(token, SECRATE_TOKEN, (err, decoded) => {
            if (err) {
                res.status(404).json({
                    message: "Invalid Token",
                    status: "Failure"
                })
            }
            else {
                next()
            }
        })
    }
}

module.exports = authentication