import React, { useState, useEffect, useCallback } from "react";

const url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const getPokemons = (theArray) => {
      theArray.forEach(async function (result) {
        const res = await fetch(result.url);
        const data = await res.json();
        setPokemons((myList) => [...myList, data]);
        setAllPokemons((myList) => [...myList, data]);
      });
    };

    getPokemons(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <AppContext.Provider
      value={{ loading, pokemons, setPokemons, allPokemons }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
