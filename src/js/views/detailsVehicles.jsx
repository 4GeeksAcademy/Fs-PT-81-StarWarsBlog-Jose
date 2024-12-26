import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetailsVehicles = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOneVehicle(params.uid);
  }, []);
  return (
    <div className="container">
      <div className="card">
        <figure>
          <img src="" alt="" />
          <figcaption>{store.vehicle?.name}</figcaption>
        </figure>
        <div>
          <p> Model: {store.vehicle.properties?.model}</p>
          <p> Class: {store.vehicle.properties?.vehicle_class}</p>
          <p> Cost: {store.vehicle.properties?.cost_in_credits}</p>
          <p> Manufacturer: {store.vehicle.properties?.manufacturer}</p>
          <p> Crew: {store.vehicle.properties?.crew}</p>
        </div>
      </div>
    </div>
  );
};
