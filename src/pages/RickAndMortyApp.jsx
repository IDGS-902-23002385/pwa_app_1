
import { useState, useEffect } from "react";
import { useCharacters } from "../services/rmApi";
import SearchCharacters from "../components/features/rickandmorty_app/SearchCharacter";
import CharacterPortrait from "../components/features/rickandmorty_app/CharacterPortrait";

export default function CharactersPage() {
  const [pagina, setPagina] = useState(1);
  const [busqueda, setBusqueda] = useState("");

  const { characters, totalPages, loading, error } = useCharacters(pagina);

  useEffect(() => {
    localStorage.setItem("ultimaBusqueda", busqueda);
  }, [busqueda]);

  const personajesFiltrados = characters.filter((personaje) =>
    personaje.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  const primerPersonaje =
    personajesFiltrados.length > 0 ? personajesFiltrados[0] : null;

  return (
    <div className="characters-page-container">
      <header className="page-header">
        <h1>Buscador de Personajes (Rick & Morty)</h1>
      </header>

      <main className="page-content">
        <SearchCharacters
          valor={busqueda}
          onCambiar={setBusqueda}
          placeholder="Ej. Rick, Morty, Summer..."
          label="Buscar por nombre"
        />

        {loading && (
          <div className="status-message">
            Cargando personajes...
          </div>
        )}

        {error && (
          <div className="status-message error-message">
            Error: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="portrait-section">
            <CharacterPortrait
              character={primerPersonaje}
              titulo={primerPersonaje ? primerPersonaje.name : "Sin resultados"}
              alt={primerPersonaje
                ? `Imagen de ${primerPersonaje.name}`
                : "No encontrado"}
            />
          </div>
        )}

        <div className="pagination-controls">
          <button
            type="button"
            className="btn-pagination"
            disabled={pagina <= 1 || loading}
            onClick={() => setPagina((p) => Math.max(p - 1, 1))}
          >
            ← Anterior
          </button>

          <span className="pagination-info">
            Página {pagina} de {totalPages}
          </span>

          <button
            type="button"
            className="btn-pagination"
            disabled={pagina >= totalPages || loading}
            onClick={() => setPagina((p) => Math.min(p + 1, totalPages))}
          >
            Siguiente →
          </button>
        </div>
      </main>
    </div>
  );
}
