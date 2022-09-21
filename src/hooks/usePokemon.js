import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {

      try {
        const data = await fetchPokemon();
        setPokemon(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    loadData();
  }, []);

  return { loading, pokemon };
}