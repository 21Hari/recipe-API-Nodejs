const mongoose = require("mongoose")
const userSchemaRule = {
    name: {
        type: String,
        required: [true, "Enter the Name"]
    },
    email: {
        type: String,
        required: [true, "Enter the Email"],
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter the Password"],
        minlength: 8,
        unique: true
    }

}
const UserSchema = new mongoose.Schema(userSchemaRule)

const UserModel = mongoose.model("UserModel", UserSchema)

module.exports = UserModel