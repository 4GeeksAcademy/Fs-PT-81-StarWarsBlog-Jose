import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-dark mb-1">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          {" "}
          <img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32"></img>
        </span>
      </Link>
      <div className="ml-auto dropdown">
        <button
          className="btn btn-dark dropdown-toggle"
          type="button"
          id="favoritesDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites <i className="fa-regular fa-heart text-danger"></i>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="favoritesDropdown"
        >
          {store.favorites.length > 0 ? (
            store.favorites.map((fav, index) => (
              <li
                key={index}
                className="dropdown-item d-flex justify-content-between align-items-center"
              >
                <span>{fav.name}</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => actions.removeFavorite(fav.uid)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))
          ) : (
            <li className="dropdown-item">No tienes favoritos</li>
          )}
        </ul>
      </div>
    </nav>
  );
};
