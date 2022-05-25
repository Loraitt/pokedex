import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Utils/context";


function Topbar() {
  const { setPokemons, allPokemons } = React.useContext(AppContext);
  let navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h1
          onClick={() => {
            const newPokemons = allPokemons;
            setPokemons(newPokemons);
          }}
        >
          Pokédex
        </h1>
        
      </div>
    </>
  );
}

export default Topbar;
