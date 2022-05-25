import React from "react";
import { useNavigate } from "react-router-dom";

// Cette page gère le contenu des cartes pour chaque Pokémon.

export const Pokemon = ({ id, name, sprites, types }) => {
  let navigate = useNavigate();

  const upperCaseFirstLetter = (word) => {
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
  };
  return (
    <>
      <div className={`pokemon-wrapper ${types[0].type.name}`}>
        <div>{upperCaseFirstLetter(name)}</div>
        <img src={sprites.front_default} />
        <span>Type: {upperCaseFirstLetter(types[0].type.name)}</span>
        <button
          className="btn"
          onClick={() => {
            navigate(`/pokemon/${id}`);
          }}
        >
          + d'infos
        </button>
      </div>
    </>
  );
};
