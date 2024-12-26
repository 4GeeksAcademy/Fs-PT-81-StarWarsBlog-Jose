import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOneCharacter(params.uid);
  }, []);
  return (
    <div className="container">
      <div className="card bg-secondary">
        <figure>
          <img src="" alt="" />
          <figcaption>{store.character?.name}</figcaption>
        </figure>
        <div>
          <p> Eye color: {store.character.properties?.eye_color}</p>
          <p> Hair color: {store.character.properties?.hair_color}</p>
          <p> Birth year: {store.character.properties?.birth_year}</p>
          <p> Gender: {store.character.properties?.gender}</p>
          <p> Height: {store.character.properties?.height}</p>
        </div>
      </div>
    </div>
  );
};
