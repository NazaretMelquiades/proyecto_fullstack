import { useState, useEffect } from "react";
import axios from "axios";
import RecipesCard from "./RecipesCard";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

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
        params: { Name: search } // ⚡ Aquí pasamos el query param que tu backend espera
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

  return (
    <div>
      <h3>Lista de recetas</h3>
      <div>
        <input
          type="text"
          placeholder="Buscar receta..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown} // Buscar al pulsar Enter
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipesCard key={recipe._id} recipe={recipe} />
          ))
        ) : (
          <p>No hay recetas para mostrar</p>
        )}
      </div>
    </div>
  );
};

export default RecipesList;
