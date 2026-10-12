import PropTypes from "prop-types";
import "../../../styles/SearchBar.css";

/**
 * SearchBar
 *
 * @param {object}   props
 * @param {string}   props.valor   
 * @param {Function} props.onCambiar
 * @param {string}   [props.placeholder]
 */
function SearchBar({ valor, onCambiar, placeholder }) {
  return (
    <>
      <label htmlFor="busqueda" className="search-label">
        Buscar por nombre
      </label>
      <div className="search-bar">
        <input
          id="busqueda"
          type="search"
          className="search-input"
          value={valor}
          placeholder={placeholder}
          onChange={(e) => onCambiar(e.target.value)}
        />
        {valor && (
          <button
            type="button"
            className="search-clear"
            aria-label="Limpiar búsqueda"
            onClick={() => onCambiar("")}
          >
            ✕
          </button>
        )}
      </div>
    </>
  );
}

SearchBar.propTypes = {
  valor: PropTypes.string.isRequired,
  onCambiar: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: "Ej. pikachu",
};

export default SearchBar;