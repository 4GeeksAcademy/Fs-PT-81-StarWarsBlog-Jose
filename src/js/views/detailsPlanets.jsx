import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetailsPlanets = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOnePlanet(params.uid);
  }, []);
  return (
    <div className="container">
      <div className="card">
        <figure>
          <img src="" alt="" />
          <figcaption>{store.planets?.name}</figcaption>
        </figure>
        <div>
          <p> Population: {store.planet.properties?.population}</p>
          <p> Diameter: {store.planet.properties?.diameter}</p>
          <p> Gravity: {store.planet.properties?.gravity}</p>
          <p> Climate: {store.planet.properties?.climate}</p>
          <p> Terrain: {store.planet.properties?.terrain}</p>
        </div>
      </div>
    </div>
  );
};
