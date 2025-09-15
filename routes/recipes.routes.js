const express = require('express');
const recipesController = require('../controllers/recipes.controller');
const router = express.Router();

// GET /api/recipes/ingredient?ingredient=chocolate
router.get('/recipes/ingredient', recipesController.getRecipesByIngredient);

// GET /api/recipes?Name=pizza
router.get('/recipes', recipesController.getRecipes);

// GET /api/recipes/:id
router.get('/recipes/:id', recipesController.getRecipesById);

// POST /api/recipes
router.post('/recipes', recipesController.createRecipe);

module.exports = router;
