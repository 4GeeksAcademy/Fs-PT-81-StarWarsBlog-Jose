import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.people);

  return (
    <div className="text-center bg-dark">
      <section className="pb-5">
        <h2 className="text-white star-wars-font">Characters</h2>
        <div className="d-flex overflow-auto flex-nowrap blueScrollbar">
          {store.people?.map((el) => (
            <Card
              key={el.uid}
              type="people"
              name={el.name}
              uid={el.uid}
              img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
            />
          ))}
        </div>
      </section>
      <section className="pb-5">
        <h2 className="text-white">Vehicles</h2>
        <div className="d-flex overflow-auto flex-nowrap purpleScrollbar">
          {store.vehicles?.map((el) => (
            <Card
              key={el.uid}
              type="vehicle"
              name={el.name}
              uid={el.uid}
              img={`https://starwars-visualguide.com/assets/img/vehicles/${el.uid}.jpg`}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-white">Planets</h2>
        <div className="d-flex overflow-auto flex-nowrap redScrollbar">
          {store.planets?.map((el) => (
            <Card
              key={el.uid}
              type="planets"
              name={el.name}
              uid={el.uid}
              img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
