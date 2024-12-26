import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {

const FavoritesCount = () => {
    const { store, actions } = useContext(Context);
    const favoriteCount = store.favorites.length;
  
    return (
      <div className="favorite-count">
        <span>Favoritos: {favoriteCount}</span>
      </div>
    );
  };
}