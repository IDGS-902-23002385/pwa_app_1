import { useEffect, useMemo, useState } from "react";

import { obtenerPokemones } from "../services/pokeapi";
import PokemonCard from "../components/features/pokemon_api/PokemonCard";
import FilterBar from "../components/features/pokemon_api/FilterBar";
import SearchBar from "../components/features/pokemon_api/SearchBar";

function PokemonApp() {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [tipoActivo, setTipoActivo] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    obtenerPokemones(30, controller.signal)
      .then(setPokemones)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setCargando(false);
      });

    return () => controller.abort();
  }, []);

  const tiposUnicos = useMemo(
    () => [...new Set(pokemones.flatMap((p) => p.tipos))].sort(),
    [pokemones]
  );

  const pokemonesFiltrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    return pokemones.filter(
      (p) =>
        (tipoActivo === "Todos" || p.tipos.includes(tipoActivo)) &&
        p.nombre.includes(texto)
    );
  }, [pokemones, tipoActivo, busqueda]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pokédex</h1>
        <p>Explora pokémon usando la PokeAPI</p>
      </header>

      <SearchBar valor={busqueda} onCambiar={setBusqueda} />

      <FilterBar
        tipos={tiposUnicos}
        tipoActivo={tipoActivo}
        onSeleccionar={setTipoActivo}
      />

      <main className="cards-grid">
        {cargando && <p className="status">Cargando pokémon…</p>}

        {error && <p className="status status--error">Error: {error}</p>}

        {!cargando && !error && pokemonesFiltrados.length === 0 && (
          <p className="no-results">No hay pokémon para esta búsqueda.</p>
        )}

        {pokemonesFiltrados.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </main>
    </div>
  );
}

export default PokemonApp;