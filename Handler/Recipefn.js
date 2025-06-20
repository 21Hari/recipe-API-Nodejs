const RecepieModel = require("../Model/RecipeModel")
const {
    getAllFactory,
    getBasedIdFactory,
    createFactory,
    updateFactory,
    deleteBasedIdFactory
} = require("../utility/crudFactory")

const getRecipe = getAllFactory(RecepieModel)
const createRecipe = createFactory(RecepieModel)
const getRecipeById = getBasedIdFactory(RecepieModel)
const updateRecipe = updateFactory(RecepieModel)
const deleteRecipeById = deleteBasedIdFactory(RecepieModel)

module.exports = {
    getRecipe,
    createRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipeById
}