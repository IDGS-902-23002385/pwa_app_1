import PropTypes from "prop-types";

const COLORES_TIPO = {
  normal: "#a8a77a", fire: "#ee8130", water: "#6390f0", electric: "#f7d02c",
  grass: "#7ac74c", ice: "#96d9d6", fighting: "#c22e28", poison: "#a33ea1",
  ground: "#e2bf65", flying: "#a98ff3", psychic: "#f95587", bug: "#a6b91a",
  rock: "#b6a136", ghost: "#735797", dragon: "#6f35fc", dark: "#705746",
  steel: "#b7b7ce", fairy: "#d685ad",
};

/**
 * PokemonCard
 *
 * @param {object}   props
 * @param {number}   props.id
 * @param {string}   props.nombre
 * @param {string}   props.imagen
 * @param {string[]} props.tipos
 * @param {number}   props.altura
 * @param {number}   props.peso
 */
function PokemonCard({ id, nombre, imagen, tipos, altura, peso }) {
  const color = COLORES_TIPO[tipos[0]] ?? "#777";

  return (
    <article className="card" style={{ "--card-color": color }}>
      <div className="card__header">
        <img className="card__image" src={imagen} alt={nombre} loading="lazy" />
        <h2 className="card__title">
          #{String(id).padStart(3, "0")} {nombre}
        </h2>
      </div>

      <>
        {tipos.map((tipo) => (
          <span key={tipo} className="card__badge">
            {tipo}
          </span>
        ))}
      </>

      <>
        <footer className="card__footer">
          Altura: <strong>{altura} m</strong> · Peso: <strong>{peso} kg</strong>
        </footer>
      </>
    </article>
  );
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  tipos: PropTypes.arrayOf(PropTypes.string).isRequired,
  altura: PropTypes.number.isRequired,
  peso: PropTypes.number.isRequired,
};

export default PokemonCard;