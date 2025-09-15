const { response } = require('express');
const recipesService = require('../services/recipes.service');
// const Recipes = require('../models/recipes.model');


// GET 
// GET /recipes?Name=pizza
const getRecipes = async (req, res) => {
    const { Name } = req.query;

    try {
        let recipes;
        if (Name) {
            recipes = await recipesService.getRecipesByName(Name);
        } else {
            recipes = await recipesService.getAllRecipes();
        }

        if (!recipes || recipes.length === 0) {
            return res.status(404).json({ message: 'No recipes found' });
        }

        res.status(200).json(recipes);
    } catch (err) {
        console.error('ERROR in getRecipes:', err);
        res.status(500).json({ message: `Server error: ${err.message}` });
    }
};

const getRecipesById = async (req, res) => {
    const { id } = req.params;

    try {
        const recipe = await recipesService.getRecipesById(id);

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json(recipe);
    } catch (err) {
        console.error('ERROR in getRecipeById:', err);
        res.status(500).json({ message: `Server error: ${err.message}` });
    }
};

const getRecipesByIngredient = async (req, res) => {
    const { ingredient } = req.query;
    if (!ingredient) {
        return res.status(400).json({ error: "You must provide an ingredient" });
    }

    try {
        const recipes = await recipesService.getRecipesByIngredient(ingredient);

        if (!recipes || recipes.length === 0) {
            return res.status(404).json({ message: "No recipes found with that ingredient" });
        }

        res.status(200).json(recipes);
    } catch (error) {
        console.error('ERROR in getRecipesByIngredient:', error);
        res.status(500).json({ error: "Error fetching recipes" });
    }
};

// POST
const createRecipe = async (req, res) => {
    const { Name, Ingredients, Steps, Images } = req.body;

    if (!Name || !Ingredients || !Steps) {
        return res.status(400).json({ message: 'Name, Ingredients and Steps are required' });
    }

    try {
        const newRecipe = await recipesService.createRecipe(Name, Ingredients, Steps, Images || []);
        res.status(201).json(newRecipe);
    } catch (err) {
        console.error('ERROR in createRecipe:', err);
        res.status(500).json({ message: `Server error: ${err.message}` });
    }
};

module.exports = {
    getRecipes,
    getRecipesById,
    getRecipesByIngredient,
    createRecipe
}