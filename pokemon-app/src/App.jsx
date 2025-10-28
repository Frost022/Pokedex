import React from "react";
import { Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";

export default function App(){
  return (
    <SearchProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </SearchProvider>
  );
};