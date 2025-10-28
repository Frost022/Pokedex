import React from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const { name } = useParams();

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 72px)" }}>
      <aside style={{ width: "50%", background: "#fff", padding: 24, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ width: "80%", maxWidth:420 }}>
          <div style={{ height: "60vh", background:"#f8fafc", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ color:"#9ca3af" }}>Card visual de {name}</div>
          </div>
        </div>
      </aside>

      <section style={{ width: "50%", padding:24, overflowY:"auto" }}>
        <h2 style={{ textTransform: "capitalize", marginTop:0 }}>{name}</h2>
        <p style={{ color:"#6b7280" }}>Aqui aparecerão: tipos, stats, movimentos, regiões e evoluções.</p>
      </section>
    </div>
  );
}
