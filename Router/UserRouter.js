const express = require("express")
const UserRouter = express.Router()
const authentication = require("../Middlewarefn/jwtfn")
const UserController = require("../Handler/Userfn")


UserRouter.post("/signup", UserController.signupHandler)
UserRouter.post("/login", UserController.loginHandler)


UserRouter.get("/", authentication, UserController.getUserHandler)
UserRouter.get("/:id", authentication, UserController.getUserHandlerBasedId)
UserRouter.put("/:id", authentication, UserController.updateUserHandlerBasedId)
UserRouter.delete("/:id", authentication, UserController.deleteUserHandlerBasedId)

module.exports = UserRouter