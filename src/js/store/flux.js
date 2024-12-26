const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url: "https://www.swapi.tech/api/",
      people: [],
      character: [],
      vehicles: [],
      vehicle: [],
      planets: [],
      planet: [],
      favorites: [],
    },
    actions: {
      getPeople: async () => {
        try {
          const resp = await fetch(getStore().url + "/people");
          if (!resp.ok) throw new Error("Error fetching people");
          const data = await resp.json();
          setStore({ people: data.results });
        } catch (error) {
          console.error(error);
        }
      },
      getOneCharacter: async (uid) => {
        try {
          const resp = await fetch(getStore().url + "/people/" + uid);
          if (!resp.ok) throw new Error("Error fetching character");
          const data = await resp.json();
          setStore({ character: data.result });
        } catch (error) {
          console.error(error);
        }
      },
      getVehicles: async () => {
        try {
          const resp = await fetch(getStore().url + "/vehicles");
          if (!resp.ok) throw new Error("Error fetching vehicles");
          const data = await resp.json();
          setStore({ vehicles: data.results });
        } catch (error) {
          console.error(error);
        }
      },
      getOneVehicle: async (uid) => {
        try {
          const resp = await fetch(getStore().url + "/vehicles/" + uid);
          if (!resp.ok) throw new Error("Error fetching vehicle");
          const data = await resp.json();
          setStore({ vehicle: data.result });
        } catch (error) {
          console.error(error);
        }
      },
      getPlanets: async () => {
        try {
          const resp = await fetch(getStore().url + "/planets");
          if (!resp.ok) throw new Error("Error fetching planets");
          const data = await resp.json();
          setStore({ planets: data.results });
        } catch (error) {
          console.error(error);
        }
      },
      getOnePlanet: async (uid) => {
        try {
          const resp = await fetch(getStore().url + "/planets/" + uid);
          if (!resp.ok) throw new Error("Error fetching planet");
          const data = await resp.json();
          setStore({ planet: data.result });
        } catch (error) {
          console.error(error);
        }
      },
      addFavorite: (item) => {
        const store = getStore();
        const exists = store.favorites.some((fav) => fav.uid === item.uid);

        if (!exists) {
          setStore({ favorites: [...store.favorites, item] });
        }
      },
      removeFavorite: (uid) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter((fav) => fav.uid !== uid),
        });
      },
    },
  };
};

export default getState;
