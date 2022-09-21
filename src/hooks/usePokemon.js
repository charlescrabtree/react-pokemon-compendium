import { useState, useEffect } from 'react';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
        // will load data from API
        // will set data in state
    };
    loadData();
  }, []);

  return { loading };
}