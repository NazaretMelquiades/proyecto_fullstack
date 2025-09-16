const queries = require("../queries/favs.queries");
const { executeQuery } = require('../utils/pgHelper');

const getAllFavoritesById = async (user_id) => {
    const rows = await executeQuery(queries.getAllFavoritesById, [user_id]);
    return rows;
};

const addFavorite = async (favorite) => {
    const { user_id, recipes_id } = favorite;
    return await executeQuery(queries.addFavorite, [user_id, recipes_id])
}

const deleteFavorite = async (user_id, recipes_id) => {
    return await executeQuery(queries.deleteFavorite, [user_id, recipes_id])
}

module.exports = {
    getAllFavoritesById,
    addFavorite,
    deleteFavorite
}