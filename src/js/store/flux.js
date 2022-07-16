const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      getPlanet: [],
      person: [],
      people: [],
      getVehicle: [],
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

      getPlanet: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ planet: data.results });
          })
          .catch((error) => console.log("error has occurred", error));
      },

      getPerson: async (id) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/people/1`
          );
          if (response.ok) {
            const data = await response.json();
            console.log(data.result.properties)
            setStore({ person: data.result.properties });
          }
        } catch (error) {
          throw Error(error);
        }
      },
    },
  };
};

export default getState;
