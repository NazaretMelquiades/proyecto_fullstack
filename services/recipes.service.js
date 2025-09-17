const mongoose = require('mongoose');
const Recipes = require('../models/recipes.model');


const getAllRecipes = async () => {
    return await Recipes.find({}, "-__v");
};

const getRecipesByName = async (name) => {
    if (!name) return []; // Si no hay nombre, devuelve vacío

    // Buscamos recetas cuyo Name contenga el texto, case-insensitive
    const recipes = await Recipes.find({ Name: { $regex: name, $options: 'i' } })
        .select('-_id -__v');

    return recipes;
};

const getRecipesByIngredient = async (ingredient) => {
    if (!ingredient) return [];
    // Búsqueda parcial y case-insensitive
    return await Recipes.find({ Ingredients: { $regex: ingredient, $options: 'i' } })
        .select('-__v'); // opcional: excluye __v
}

const getRecipesById = async (id) => {
    // Si es un ObjectId válido, busca por _id
    if (mongoose.Types.ObjectId.isValid(id)) {
        return await Recipes.findById(id).select("-__v");
    }
    // Si no, busca por un campo alternativo (opcional)
    return await Recipes.findOne({ recipes_id: id }).select("-__v -_id");
};

const createRecipe = async (
    Name,
    Ingredients,
    Steps,
    Images
) => {
    const recipes = new Recipes({
        Name,
        Ingredients,
        Steps,
        Images
    });
    return await recipes.save();
};

module.exports = {
    getAllRecipes,
    getRecipesByName,
    getRecipesByIngredient,
    getRecipesById,
    createRecipe
};

// createRecipe(
//     "Pizza Margarita",
//     ["Harina", "Tomate", "Queso", "Aceite de oliva"],
//     ["Amasar", "Extender", "Hornear"],
//     ["imagen1.jpg", "imagen2.jpg"]
// );

// const test = async () => {
//     const recipes = await getAllRecipes();
//     console.log(recipes);
// };
// test();

// const test = async () => {
//     const recipes = await getRecipesById("68c7fdb5be89e1128107c3b4"); // _id de Mongo
//     console.log(recipes);
// };
// test();

// const test = async () => {
//     const recipes = await getRecipesByName("Pizza Margarita");
//     console.log(recipes);
// };
// test();

// const test = async () => {
//     const recipes = await getRecipesByIngredient("chocolate"); // _id de Mongo
//     console.log(recipes);
// };
// test();
