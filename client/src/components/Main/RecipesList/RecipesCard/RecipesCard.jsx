import React from "react";

const RecipesCard = ({ recipe, isFavorite, addFavorite, userId }) => {
  const handleAddFavorite = () => {
    if (!isFavorite) {
      addFavorite({ user_id: userId, recipes_id: recipe._id || recipe.id });
    }
  };

  return (
    <div>
      <h4>{recipe.Name || "Receta sin nombre"}</h4>
      {recipe.Ingredients && <p>Ingredientes: {recipe.Ingredients.join(", ")}</p>}
      {recipe.Steps && <p>Pasos: {recipe.Steps.join(" -> ")}</p>}
      {recipe.Images && <img src={recipe.Images} alt={recipe.Name} />}

      <button onClick={handleAddFavorite} disabled={isFavorite}>
        {isFavorite ? "Favorito" : "Añadir a favoritos"}
      </button>
    </div>
  );
};

export default RecipesCard;
