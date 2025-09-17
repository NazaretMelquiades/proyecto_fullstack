const favorites = require("../models/favs.model");
const queries = require("../queries/favs.queries");
const recipeServices = require('../services/recipes.service'); // servicio MongoDB

// GET http://localhost:3000/api/favorites/:user_id
const getAllFavoritesById = async (req, res) => {
    const user_id = req.params.user_id;

    if (!user_id) {
        return res.status(400).json({ message: "user_id is required" });
    }

    try {
        // 1️⃣ Traer solo los IDs desde PostgreSQL
        const favs = await favorites.getAllFavoritesById(user_id);

        if (favs.length === 0) {
            return res.status(404).json({
                message: "No favorites found for this user",
                items_found: 0,
                data: []
            });
        }

        // 2️⃣ Traer los datos completos desde MongoDB
        const fullFavorites = [];
        for (const fav of favs) {
            const recipeData = await recipeServices.getRecipesById(fav.recipes_id);
            if (recipeData) {
                fullFavorites.push(recipeData);
            }
        }

        res.status(200).json({
            message: `Found ${fullFavorites.length} favorite(s) for user ${user_id}`,
            items_found: fullFavorites.length,
            data: fullFavorites
        });

    } catch (err) {
        console.error("Error obtaining favorites:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// POST http://localhost:3000/api/favorites
const addFavorite = async (req, res) => {
    const { user_id, recipes_id } = req.body;

    if (!user_id || !recipes_id) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const result = await favorites.addFavorite({ user_id, recipes_id });

        if (result === 0) {
            return res.status(400).json({
                message: "Favorite not added",
                items_created: result
            });
        }

        res.status(201).json({
            message: "Favorite added successfully",
            items_created: result,
            data: { user_id, recipes_id }
        });
    } catch (err) {
        console.error("Error adding favorite:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// DELETE http://localhost:3000/api/favorites
const deleteFavorite = async (req, res) => {
    const { user_id, recipes_id } = req.body;

    if (!user_id || !recipes_id) {
        return res.status(400).json({ message: "Required fields are missing" });
    }

    try {
        const result = await favorites.deleteFavorite(user_id, recipes_id);

        if (result === 0) {
            return res.status(404).json({
                message: "The favorite does not exist or has already been removed",
                items_deleted: result
            });
        }

        res.status(200).json({
            message: "Favorite deleted successfully",
            items_deleted: result,
            data: { user_id, recipes_id }
        });
    } catch (err) {
        console.error("Error deleting favorite:", err); // mostrar todo el error
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getAllFavoritesById,
    addFavorite,
    deleteFavorite
};
