const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      getPlanet: [],
      getPerson: [],
      getVehicle: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        getPerson: () => {
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
              console.log(data);
              setStore({ person: data.results });
            })
            .catch((error) => console.log("error has occurred", error));
        };

        getPlanet: () => {
          fetch("https://www.swapi.tech/api/planets")
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setStore({ planet: data.results });
            })
            .catch((error) => console.log("error has occurred", error));
        };
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
