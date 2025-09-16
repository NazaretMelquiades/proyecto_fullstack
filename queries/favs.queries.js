const queries = {
    getAllFavoritesById: `
    SELECT recipes_id
    FROM favorites
    WHERE user_id = $1`,
    addFavorite: `
    INSERT INTO favorites(user_id, recipes_id)
    VALUES ($1, $2)`,
    deleteFavorite: `
    DELETE FROM favorites
    WHERE user_id = $1 
    AND recipes_id =$2`
}

module.exports = queries;