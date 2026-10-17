
import { useState, useEffect } from "react";

import { obtenerPokemones } from "../services/pokeapi";
import PokemonCard from "../components/features/pokemon_api/PokemonCard";
import FilterBar from "../components/features/pokemon_api/FilterBar";
import SearchBar from "../components/features/pokemon_api/SearchBar";

function PokemonApp() {
  const [pokemones, setPokemones] = useState([]);
  const [tipo, setTipo] = useState("Todos");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerPokemones()
      .then((datos) => setPokemones(datos))
      .finally(() => setCargando(false));
  }, []);

  const tipos = [...new Set(pokemones.flatMap((p) => p.tipos))].sort();

  const filtrados = pokemones.filter((p) => {
    const coincideTipo = tipo === "Todos" || p.tipos.includes(tipo);
    return coincideTipo;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pokédex</h1>
        <p>Explora pokemon usando la PokeAPI</p>
      </header>

      <FilterBar tipos={tipos} tipoActivo={tipo} onSeleccionar={setTipo} />

      <main className="cards-grid">
        {cargando ? (<p>Cargando pokemon...</p>) : 
        filtrados.length === 0 ? (<p>No hay pokemon para esta busqueda.</p>) : (filtrados.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />)
        )}
      </main>
    </div>
  );
}

export default PokemonApp;
