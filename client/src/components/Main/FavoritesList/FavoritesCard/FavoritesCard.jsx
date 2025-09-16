import React, { useEffect, useState } from "react";
import axios from "axios";

const FavoritesCard = ({ favorite, onDelete }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/recipes/${favorite.recipes_id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      }
    };
    fetchRecipe();
  }, [favorite.recipes_id]);

  if (!recipe) return null;

  return (
    <div>
      <h3>{recipe.name}</h3>
      <p><strong>Ingredientes:</strong> {recipe.ingredients}</p>
      <p><strong>Pasos:</strong> {recipe.steps}</p>
      {recipe.imagen && <img src={recipe.imagen} alt={recipe.name} width={200} />}
      <button onClick={() => onDelete(favorite.recipes_id)}>Eliminar</button>
    </div>
  );
};

export default FavoritesCard;

