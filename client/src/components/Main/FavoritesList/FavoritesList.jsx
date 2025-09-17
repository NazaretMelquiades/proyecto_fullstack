import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoritesCard from "./FavoritesCard";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const userId = 1; // forzamos siempre el usuario 1

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/favorites/${userId}`);
        setFavorites(res.data.data || []);
      } catch (err) {
        console.error("Error al obtener favoritos:", err);
        setFavorites([]);
      }
    };

    fetchFavorites();
  }, []);

  const removeFavoriteFromState = (recipesId) => {
    setFavorites((prev) => prev.filter((fav) => (fav._id || fav.recipes_id) !== recipesId));
  };

  return (
    <div>
      <h3>Favoritos</h3>
      {favorites.length > 0 ? (
        favorites.map((fav) => (
          <FavoritesCard
            key={fav._id || fav.recipes_id}
            recipe={fav}
            userId={userId}
            onFavoriteRemoved={removeFavoriteFromState}
          />
        ))
      ) : (
        <p>No tienes favoritos todavía</p>
      )}
    </div>
  );
};

export default FavoritesList;
