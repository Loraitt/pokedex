import React from "react";
import { AppContext } from "../Utils/context";
import Loading from "../Components/Loading";
import { Pokemon } from "./Pokemon";

// Affichage de la page des Pokémons

function Pokemons() {
  const { loading, pokemons } = React.useContext(AppContext);
  if (loading) {
    return <Loading />;
  }
  if (pokemons.length < 1) {
    return <h1 className="no-pokemons">Aucun résultat trouvé</h1>;
  }
  return (
    <div className="pokemon-container">
      {pokemons.map((pokemon) => {
        return <Pokemon {...pokemon} key={pokemon.id} />; // spread, récup element tableau
      })}
    </div>
  );
}

export default Pokemons;
