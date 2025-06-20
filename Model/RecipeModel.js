const mongoose = require("mongoose")
const recepieSchemaRule = {
    title: {
        type: String,
        required: [true, "Pass the title of the Recipe"],
        minlength: 3,
        maxLength: 100
    },
    description: {
        type: String,
        required: [true, "Pass the tilte of the Recipe"],
        maxLength: 300
    },
    ingredients: {
        type: [String],
        required: [true, "Pass the ingredients of the Recipe"],
        validate: {
            validator: (arr) => arr.length > 0,
            message: "At least one Ingredients is needed"
        }
    },
    instruction: {
        type: String,
        required: [true, "Pass the Instruction of the Recipe"],
        minlength: 10
    },
    image: {
        type: String,
        default: " "
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}
const RecepieSchema = new mongoose.Schema(recepieSchemaRule)
const RecepieModel = mongoose.model("RecepieModel", RecepieSchema)

module.exports = RecepieModel