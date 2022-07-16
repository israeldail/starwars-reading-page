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
      getPeople: async () => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/people`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.results);
            setStore({ people: data.results });
          }
        } catch (error) {
          throw Error(error);
        }
      },

      planets: async () => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/planets`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.results);
            setStore({ planets: data.results });
          }
        } catch (error) {
          throw Error(error);
        }
      },

      planet: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/planets/1`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.result);
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
            console.log(data.result);
            setStore({ person: data.result.properties });
          }
        } catch (error) {
          throw Error(error);
        }
      },

      getVehicles: async () => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/vehicles`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.results);
            setStore({ vehicles: data.results });
          }
        } catch (error) {
          throw Error(error);
        }
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
