import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  const { name, types, sprite, id } = pokemon;

  // Imagem padrão enquanto não usamos a da API
  const imageUrl = sprite || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  // Cores simples para os tipos (só pra começar)
  const typeColors = {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    poison: "#A040A0",
    normal: "#A8A878",
    fairy: "#EE99AC",
    bug: "#A8B820",
    ground: "#E0C068",
    psychic: "#F85888",
    fighting: "#C03028",
    rock: "#B8A038",
    ghost: "#705898",
    ice: "#98D8D8",
    dragon: "#7038F8",
  };

  return (
    <Link to={`/pokemon/${id}`} className="pokemon-card">
      <div
        style={{
          backgroundColor: "#f3f4f6",
          borderRadius: 12,
          padding: 16,
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.2s",
        }}
        className="hover:scale-105"
      >
        <img
          src={imageUrl}
          alt={name}
          style={{ width: 96, height: 96 }}
        />
        <h2 style={{ textTransform: "capitalize", margin: "8px 0" }}>{name}</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {types.map((type) => (
            <span
              key={type}
              style={{
                backgroundColor: typeColors[type] || "#ccc",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: 8,
                fontSize: 12,
                textTransform: "capitalize",
              }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
