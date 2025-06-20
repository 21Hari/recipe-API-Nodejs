const express = require("express")
const RecipeRouter = express.Router()
const authentication = require("../Middlewarefn/jwtfn")
const {
    getRecipe,
    createRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipeById
} = require("../Handler/Recipefn")




RecipeRouter.get("/", authentication, getRecipe)
RecipeRouter.post("/", authentication, createRecipe)
RecipeRouter.get("/:id", authentication, getRecipeById)
RecipeRouter.put("/:id", authentication, updateRecipe)
RecipeRouter.delete("/:id", authentication, deleteRecipeById)

module.exports = RecipeRouter