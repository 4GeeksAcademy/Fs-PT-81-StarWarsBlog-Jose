import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { type, uid, name, img } = props;
  const { store, actions } = useContext(Context);

 
  const isFavorite = store.favorites.some((fav) => fav.uid === uid);

  return (
    <div className="card m-2 bg-secondary text-white" style={{ minWidth: "250px" }}>
      <figure>
        <img className="card-img-top" src={img} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <div className="d-flex justify-content-between">
        {}
        <Link to={`/details/${type}/${uid}`}>
          <button className="btn btn-dark m-2 text-primary">Learn More</button>
        </Link>
        <button
          className={`btn m-2 ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
          onClick={() =>
            isFavorite
              ? actions.removeFavorite(uid) 
              : actions.addFavorite({ type, uid, name, img }) 
          }
        >
          <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart text-danger`}></i>
        </button>
      </div>
    </div>
  );
};
