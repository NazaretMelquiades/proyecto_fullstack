import React from "react";
import axios from "axios";

const FavoritesCard = ({ recipe, userId, onFavoriteRemoved }) => {
  const handleRemoveFavorite = async () => {
    try {
      console.log(recipe);
      const recipesId = recipe._id || recipe.recipes_id; // fallback por si viene de SQL o Mongo
      console.log("🟢 Enviando DELETE con payload:", {
        user_id: userId,
        recipes_id: recipesId,
      });

      const res = await axios.delete("http://localhost:3000/api/favorites", {
        data: { user_id: userId, recipes_id: recipesId },
      });

      console.log("✅ Favorito eliminado:", res.data);
      onFavoriteRemoved(recipesId); // avisamos a la lista que lo borre del state
    } catch (err) {
      console.error("❌ Error al eliminar favorito:", err.response?.data || err);
    }
  };

  if (!recipe) return null;

  return (
    <div>
      <h4>{recipe.Name || "Receta sin nombre"}</h4>
      {recipe.Ingredients && <p>{recipe.Ingredients.join(", ")}</p>}
      {recipe.Steps && <p>{recipe.Steps.join(" -> ")}</p>}
      {recipe.Images && recipe.Images[0] && (
        <img src={recipe.Images[0]} alt={recipe.Name} />
      )}
      <button onClick={handleRemoveFavorite}>Eliminar favorito</button>
    </div>
  );
};

export default FavoritesCard;
