const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      getPeople: [],
      person: [],
      people: [],
      planets: [],
      planet: [],
      getVehicles: [],
      getVehicle: [],
      vehicles: [],
      vehicle: [],
      favorites: [],
    },
    actions: {
      getPeople: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((response) => {
            if (response.status === 200) {
              console.log("SUCCESSS");
              return response.json();
            } else if (response.status === 408) {
              console.log("SOMETHING WENT WRONG");
            }
          })
          .then((data) => {
            console.log(data.results);
            setStore({ people: data.results });
          })
          .catch((error) => console.log("error has occurred", error));
      },

      planets: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setStore({ planets: data.results });
          })
          .catch((error) => console.log("error has occurred", error));
      },

      planet: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/planets/1`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.result.properties);
            setStore({ planet: data.result.properties });
          }
        } catch (error) {
          throw Error(error);
        }
      },

      getPerson: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/people/1`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.result.properties);
            setStore({ person: data.result.properties });
          }
        } catch (error) {
          throw Error(error);
        }
      },

      getVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles")
          .then((res) => res.json())
          .then((data) => {
            console.log(data.results);
            setStore({ vehicles: data.results });
          })
          .catch((err) => console.error(err));
      },

      getVehicle: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/vehicles/7`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.result);
            setStore({ vehicle: data.result.properties });
          }
        } catch (error) {
          throw Error(error);
        }
      },
    },
  };
};

export default getState;
