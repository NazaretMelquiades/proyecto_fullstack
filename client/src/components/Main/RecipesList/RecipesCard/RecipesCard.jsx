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
    <div className="recipes-card">
      <div className="card-content">

        <h4>{recipe.Name || "Receta sin nombre"}</h4>
        {recipe.Ingredients && <p>Ingredientes: {recipe.Ingredients.join(", ")}</p>}
        {recipe.Steps && <p>Pasos: {recipe.Steps.join(" → ")}</p>}
      </div>
      <div className="card-footer">
        {recipe.Images && <img className="picture_item" src={recipe.Images} alt={recipe.Name} />}
        <button onClick={handleAddFavorite}>Añadir a favoritos</button>
      </div>
    </div>
  );
};

export default RecipesCard;
