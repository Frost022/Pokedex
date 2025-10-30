import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

export default function Navbar() {
  const { query, setQuery } = useSearch();

  return (
    <header className="navbar">
      <div style={{display:"flex", alignItems:"center", gap:12}}>
        <Link to="/" className="navbar-brand">PokéDex</Link>
        <span style={{color:"#6b7280", fontSize:12}}>— sua Pokédex</span>
      </div>

      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar por nome (ex: pikachu)..."
      />

      <div>
        <button style={{padding:"8px 12px", borderRadius:8, background:"#ef4444", color:"#fff", border:"none"}}>Meu Deck</button>
      </div>
    </header>
  );
}
