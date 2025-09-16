import React from "react";
import FavoritesCard from "./FavoritesCard";

const FavoritesList = ({ favorites, onDelete }) => {
  return (
    <div>
      <h2>Favoritos</h2>
      {favorites.length > 0 ? (
        favorites.map(f => (
          <FavoritesCard
            key={f.recipes_id}
            favorite={f}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No tienes favoritos aún</p>
      )}
    </div>
  );
};

export default FavoritesList;
