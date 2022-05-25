import React from "react";
import SearchBar from "../Components/SearchBar";
import Pokemons from "../Components/Pokemons";

function Home() {
  return (
    <>
      <div className="sub-container">
        <SearchBar />
        <Pokemons />
      </div>
    </>
  );
}

export default Home;
