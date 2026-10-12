import PropTypes from "prop-types";

/**
 *
 * @param {object}   props
 * @param {string[]} props.tipos
 * @param {string}   props.tipoActivo
 * @param {Function} props.onSeleccionar
 */
function FilterBar({ tipos, tipoActivo, onSeleccionar }) {
  return (
    <>
      <nav className="filter-bar" aria-label="Filtrar por tipo">
        {["Todos", ...tipos].map((tipo) => (
          <button
            key={tipo}
            className={`filter-btn ${tipoActivo === tipo ? "active" : ""}`}
            onClick={() => onSeleccionar(tipo)}
          >
            {tipo}
          </button>
        ))}
      </nav>
    </>
  );
}

FilterBar.propTypes = {
  tipos: PropTypes.arrayOf(PropTypes.string).isRequired,
  tipoActivo: PropTypes.string.isRequired,
  onSeleccionar: PropTypes.func.isRequired,
};

export default FilterBar;