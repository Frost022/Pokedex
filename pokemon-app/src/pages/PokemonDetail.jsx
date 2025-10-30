import React from "react";
import { useParams, Link } from "react-router-dom";

const MOCK = [
  { id: 1, name: "bulbasaur", types: ["grass", "poison"], sprite: "" },
  { id: 4, name: "charmander", types: ["fire"], sprite: "" },
  { id: 7, name: "squirtle", types: ["water"], sprite: "" },
  { id: 25, name: "pikachu", types: ["electric"], sprite: "" },
  { id: 39, name: "jigglypuff", types: ["normal", "fairy"], sprite: "" }
];

export default function PokemonDetail() {
  const { id } = useParams();
  const pokemon = MOCK.find(p => p.id === Number(id));

  if (!pokemon) {
    return (
      <div className="container">
        <h2>Pokémon não encontrado 😢</h2>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" style={{ display: "inline-block", marginBottom: 12 }}>← Voltar</Link>

      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          style={{ width: 180, height: 180 }}
        />
        <div>
          <h1 style={{ textTransform: "capitalize" }}>{pokemon.name}</h1>
          <p><strong>Tipo:</strong> {pokemon.types.join(", ")}</p>
          <p><strong>ID:</strong> {pokemon.id}</p>
        </div>
      </div>
    </div>
  );
}
