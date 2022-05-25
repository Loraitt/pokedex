import React, { useEffect } from "react";
import { AppContext } from "../Utils/context";

function SearchBar() {
  const { setPokemons, allPokemons } = React.useContext(AppContext);
  const [pokename, setPokename] = React.useState("");
  const searchBar = React.useRef();

  const lowerCaseName = (word) => {
    let newWord = word.toLowerCase();
    return newWord;
  };

  const searchPokemon = (searchTerm) => {
    let pokemonsCopy = allPokemons;
    let newPokemons = pokemonsCopy.filter((pokemon) => {
      return pokemon.name === searchTerm;
    });
    setPokemons(newPokemons);
  };

  const checkSpaces = (word) => {
    let wordArray = [];
    for (let i = 0; i <= word.length - 1; i++) {
      wordArray.push(word[i]);
    }
    let countSpaces = wordArray.every((val) => {
      return val === " ";
    });
    return countSpaces;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkSpaces(pokename)) {
      alert("Entrez un nom valide");
      setPokename("");
    } else if (pokename) {
      searchPokemon(lowerCaseName(pokename));
      setPokename("");
    } else {
      alert("Entrez un nom valide");
    }
  };

  useEffect(() => {
    searchBar.current.focus();
  }, []);

  return (
    <div className="searchbar">
      <form action="" className="form-control" onSubmit={handleSubmit}>
        <input
          type="text"
          id="pokename"
          value={pokename}
          onChange={(e) => {
            setPokename(e.target.value);
          }}
          ref={searchBar}
        />
        <button type="submit" className="btn submit-btn">
         Rechercher
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
