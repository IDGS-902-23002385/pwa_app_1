const BASE_URL = "https://pokeapi.co/api/v2";


export async function obtenerPokemones(limite = 30, signal) {
  const resLista = await fetch(`${BASE_URL}/pokemon?limit=${limite}`, { signal });
  if (!resLista.ok) throw new Error(`Error ${resLista.status} al obtener la lista`);
  const { results } = await resLista.json();

  const detalles = await Promise.all(
    results.map(async ({ url }) => {
      const res = await fetch(url, { signal });
      if (!res.ok) throw new Error(`Error ${res.status} al obtener un pokémon`);
      return res.json();
    })
  );

  return detalles.map((p) => ({
    id: p.id,
    nombre: p.name,
    imagen: p.sprites.other["official-artwork"].front_default ?? p.sprites.front_default,
    tipos: p.types.map((t) => t.type.name),
    altura: p.height,
    peso: p.weight,
  }));
}