const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const RecipeRouter = require("./Router/RecipeRouter.js")
const UserRouter = require("./Router/UserRouter.js")
dotenv.config()
const { PORT, DB_NAME, DB_PASSWORD } = process.env //getting data from .env file//

/********MongoDb Connection*********/
const dbUrl = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.oknpzkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(dbUrl).then(() => {
    console.log("MongoDB is Connected")

}).catch((err) => { console.log(err.message) })

app.use(express.json())

/****Recipe Route****/
app.use("/api/recipe", RecipeRouter)

/*****User Route******/
app.use("/api/user", UserRouter)

/*********Page not found**********/
app.use("", (req, res) => {
    res.status(404).json({
        status: "Failure",
        message: "404 Page Not Found"
    })
})

/***Server Initialization*****/
app.listen(PORT, () => {
    console.log(`server is running of ${PORT}`)
})