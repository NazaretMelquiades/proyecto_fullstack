import React from "react";

const RecipesCard = ({ recipe, userId, addFavorite }) => {
  console.log("📦 Receta recibida en RecipesCard:", recipe);
  const handleAddFavorite = () => {
    const recipesId = recipe._id || recipe.id;
    console.log("🟢 Añadiendo favorito:", { user_id: userId, recipes_id: recipesId });
    if (!recipesId) return;
    addFavorite({ user_id: userId, recipes_id: recipesId });
  };

  return (
    <div>
      <h4>{recipe.Name || "Receta sin nombre"}</h4>
      {recipe.Ingredients && <p>Ingredientes: {recipe.Ingredients.join(", ")}</p>}
      {recipe.Steps && <p>Pasos: {recipe.Steps.join(" → ")}</p>}
      {recipe.Images && <img src={recipe.Images} alt={recipe.Name} />}
      <button onClick={handleAddFavorite}>Añadir a favoritos</button>
    </div>
  );
};

export default RecipesCard;
