import { useState } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import Search from '../Controls/Search';
import Select from '../Controls/Select';
import './Compendium.css';

export default function Compendium() {
  const { loading, pokemon, types, setSelectedType } = usePokemon();
  const [search, setSearch] = useState('');
  if (loading) return <div className="loader"></div>;
  return (
    <>
      <div>
        <Search search={search} setSearch={setSearch} />
        <Select options={types} changeHandler={setSelectedType} />
        <div className='container'>
          {pokemon.map((poke) => (
            <div className='poke' key={poke.id}>
              <img className='Images' src={poke.url_image} alt={poke.poke} />
              <h1>{poke.pokemon}</h1>
              <h3>{poke.type_1}</h3>
              {poke.type_2 !== 'NA' && <h3>{poke.type_2}</h3>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}