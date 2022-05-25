import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Topbar from "./Components/Topbar";
import Home from "./Pages/Home";
import Erreur from "./Pages/Erreur";
import PokemonDetail from "./Pages/PokemonDetail";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erreur />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
