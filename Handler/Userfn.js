const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require("jsonwebtoken")
const UserModel = require("../Model/UserModel")
const { SECRATE_TOKEN } = process.env

const {
    getAllFactory,
    getBasedIdFactory,
    updateFactory,
    deleteBasedIdFactory
} = require("../utility/crudFactory")

class UserController {
    static signupHandler = async (req, res) => {
        try {
            const { name, email, password } = req.body
            const bcryptPassword = await bcrypt.hash(password, 10)
            console.log(bcryptPassword)
            const newUSer = await UserModel.create({ name, password: bcryptPassword, email })
            console.log(newUSer)
            res.status(200).json({
                status: "Success",
                message: "Succesfully Sighup new User",
                newUSer
            })

        } catch (err) {
            res.status(500).json({
                status: "Failure",
                message: err.message

            })
        }

    }

    static loginHandler = async (req, res) => {
        const { email, password } = req.body
        const validmail = await UserModel.findOne({ email })
        //console.log(validmail)
        if (validmail === null) {
            res.status(404).json({
                status: "Failure",
                message: "Enter the Valid Email"
            })
        } else {
            const bcryptPasswordCheck = await bcrypt.compare(password, validmail.password)
            console.log(bcryptPasswordCheck)
            if (bcryptPasswordCheck === false) {
                res.status(404).json({
                    status: "Failure",
                    message: "Enter the correct password or email"
                })
            } else {
                console.log("token generation is starting")
                const genarateToken = jwt.sign({ payload: validmail.email }, SECRATE_TOKEN)
                console.log(genarateToken)
                res.status(200).json({
                    message: "Sucessfully logined and Generated token",
                    status: "Success",
                    genarateToken
                })

            }


        }
    }

    static getUserHandler = getAllFactory(UserModel)
    static getUserHandlerBasedId = getBasedIdFactory(UserModel)
    static updateUserHandlerBasedId = updateFactory(UserModel)
    static deleteUserHandlerBasedId = deleteBasedIdFactory(UserModel)

}




module.exports = UserController