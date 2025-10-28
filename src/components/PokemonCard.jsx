import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  // pokemon: { id, name, types: [], sprite }
  return (
    <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none" }}>
      <article className="card">
        <div className="sprite">
          {pokemon.sprite ? (
            <img src={pokemon.sprite} alt={pokemon.name} style={{ maxHeight: "100%", maxWidth: "100%" }} />
          ) : (
            <div>{pokemon.name[0]?.toUpperCase()}</div>
          )}
        </div>

        <div>
          <div className="card-title">{pokemon.name}</div>
          <div style={{ marginTop: 6, display: "flex", gap: 8 }}>
            {pokemon.types.map((t) => (
              <span key={t} className="type-badge">{t}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
