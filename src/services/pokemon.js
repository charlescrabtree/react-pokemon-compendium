import React from 'react';

export default function pokemon() {
  return (
    <div>pokemon</div>
  );
}

export async function fetchPokemon() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await resp.json();
  return data.results;
}