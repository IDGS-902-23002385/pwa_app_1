import PropTypes from "prop-types";

/**
 *
 *
 * @param {object} props
 * @param {string} [props.src]
 * @param {string} [props.alt]
 * @param {string} [props.titulo]
 */
function CharacterPortrait({ character, alt, titulo }) {
  if (!character) {
    return (
      <div className="image-display-empty">
        <p>No hay ningun personaje o imagen encontrada.</p>
      </div>
    );
  }

  return (
    <figure className="image-display-card">
        <h1>{titulo}</h1>
      <div className="image-display-wrapper">
        <img src={character.image} alt={alt} className="image-display-img" />
      </div>
    </figure>
  );
}

CharacterPortrait.propTypes = {
  character: PropTypes.string,
  alt: PropTypes.string,
  titulo: PropTypes.string,
};

export default CharacterPortrait;