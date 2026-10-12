import LANGUAGES from "../data/languages";
import LanguageCard from "../components/features/languages_app/LanguageCard";
import FilterBar from "../components/features/languages_app/FilterBar";


const TIPOS_UNICOS = [...new Set(LANGUAGES.map((lang) => lang.tipo))];

function LanguageApp() {

  const [tipoActivo, setTipoActivo] = useState("Todos");

   const lenguajesFiltrados =
    tipoActivo === "Todos"
      ? LANGUAGES
      : LANGUAGES.filter((lang) => lang.tipo === tipoActivo);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lnguajes de Programación</h1>
        <p>Explora algunos de los lenguajes más populares del mundo</p>
      </header>

      <FilterBar
        tipos={TIPOS_UNICOS}
        tipoActivo={tipoActivo}
        onSeleccionar={setTipoActivo}
      />

      <main className="cards-grid">
        {lenguajesFiltrados.length > 0 ? (
    
          lenguajesFiltrados.map((lang) => (
            <LanguageCard key={lang.id} {...lang} />
          ))
        ) : (
          <p className="no-results">No hay lenguajes para este filtro.</p>
        )}
      </main>
    </div>
  );
}

export default LanguageApp;
