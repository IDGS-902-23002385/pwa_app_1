
const BASE_URL = "https://pokeapi.co/api/v2";

export async function obtenerPokemones(limite = 30) {
  const respuesta = await fetch(`${BASE_URL}/pokemon?limit=${limite}`);
  const datos = await respuesta.json();

  const pokemones = await Promise.all(
    datos.results.map(async (pokemon) => {
      const respuesta = await fetch(pokemon.url);
      const p = await respuesta.json();

      return {
        id: p.id,
        nombre: p.name,
        imagen: p.sprites.front_default,
        tipos: p.types.map((t) => t.type.name),
        altura: p.height,
        peso: p.weight,
      };
    })
  );

  return pokemones;
}
