const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favs.controller');

// GET http://localhost:3000/api/favorites/1
router.get('/:user_id', favoritesController.getAllFavoritesById);

// Ejemplo: POST http://localhost:3000/api/favorites
// Body: { "user_id": 1, "recipes_id": 2 }
router.post('/', favoritesController.addFavorite);

// Ejemplo: DELETE http://localhost:3000/api/favorites
// Body: { "user_id": 1, "recipes_id": 2 }
router.delete('/', favoritesController.deleteFavorite);

module.exports = router;
