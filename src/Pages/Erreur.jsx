import React from "react";
import { useNavigate } from "react-router-dom";

const Erreur = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <h1>Cette page n'existe pas ou n'existe plus.</h1>
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Revenir
      </button>
    </div>
  );
};

export default Erreur;
