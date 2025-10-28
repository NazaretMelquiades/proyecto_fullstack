import { useState, useEffect } from "react";
import axios from "axios";
import RecipesCard from "./RecipesCard";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const userId = 1; // usuario fijo

  // Carga inicial de todas las recetas
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/recipes");
        setRecipes(res.data || []);
      } catch (err) {
        console.error("Error al obtener recetas:", err);
        setRecipes([]);
      }
    };
    fetchRecipes();
  }, []);

  // Función que busca recetas por nombre
  const handleSearch = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/recipes", {
        params: { Name: search }
      });
      setRecipes(res.data || []);
      setSearch('');
    } catch (err) {
      console.error("Error buscando recetas:", err);
      setRecipes([]);
    }
  };

  // Permitir búsqueda al pulsar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const addFavorite = async ({ user_id, recipes_id }) => {
    try {
      await axios.post("http://localhost:3000/api/favorites", {
        user_id,
        recipes_id,
      });
      console.log("✅ Favorito añadido");
    } catch (err) {
      console.error("❌ Error al añadir favorito:", err.response?.data || err);
    }
  };

  return (
    <div>
      <h3>Lista de recetas</h3>
      <div>
        <div className="search-bar-container">
          <input
            className="search_input"
            type="text"
            placeholder="Buscar receta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown} // Buscar al pulsar Enter
          />
          <button className="search_button" onClick={handleSearch}>Buscar</button>
        </div>
      </div>
      <div className="favorites-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipesCard
              key={recipe._id || recipe.id}
              recipe={recipe}
              userId={userId}
              addFavorite={addFavorite}
            />
          ))
        ) : (
          <p>No hay recetas para mostrar</p>
        )}
      </div>
    </div>
  );
};

export default RecipesList;