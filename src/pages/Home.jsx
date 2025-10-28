import React from "react";
import { useSearch } from "../context/SearchContext";
import PokemonCard from "../components/PokemonCard";

/* Mock inicial — usamos para prototipar UI antes de consumir API */
const MOCK = [
  { id: 1, name: "bulbasaur", types: ["grass", "poison"], sprite: "" },
  { id: 4, name: "charmander", types: ["fire"], sprite: "" },
  { id: 7, name: "squirtle", types: ["water"], sprite: "" },
  { id: 25, name: "pikachu", types: ["electric"], sprite: "" },
  { id: 39, name: "jigglypuff", types: ["normal", "fairy"], sprite: "" }
];

export default function Home() {
  const { query } = useSearch();
  const q = query.trim().toLowerCase();

  // filtragem simples por nome.
  const filtered = q ? MOCK.filter(p => p.name.includes(q)) : MOCK;

  return (
    <div className="container">
      <h1 style={{fontSize:22, marginBottom:8}}>Pokémons</h1>
      <p style={{color:"#6b7280", marginBottom:12}}>Clique em um card para ver detalhes.</p>

      <div className="grid">
        {filtered.map(p => <PokemonCard key={p.id} pokemon={p} />)}
      </div>

      {filtered.length === 0 && <p style={{marginTop:16, color:"#6b7280"}}>Nenhum Pokémon encontrado.</p>}
    </div>
  );
}
