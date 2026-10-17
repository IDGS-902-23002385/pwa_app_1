import PropTypes from "prop-types";
import "../../../styles/SearchBar.css";
/**
 * SearchBar
 *
 * @param {object}   props
 * @param {string}   props.valor
 * @param {Function} props.onCambiar
 * @param {string}   [props.placeholder]
 * @param {string}   [props.label]
 */
function SearchCharacters({ valor, onCambiar, placeholder, label }) {
  return (
    <div className="search-bar-container">
      {label && (
        <label htmlFor="busqueda" className="search-label">
          {label}
        </label>
      )}
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
    </div>
  );
}

SearchCharacters.propTypes = {
  valor: PropTypes.string.isRequired,
  onCambiar: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};


export default SearchCharacters;