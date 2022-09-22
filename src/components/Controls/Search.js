import React from 'react';
import './Search.css';

export default function Search({ search, setSearch }) {
  return (
    <div className='search'>
      <label htmlFor="search">SEARCH BY POKEMON</label>
      <input className="box" name="search" placeholder="enter name" value={search} onChange={(e) => {
        setSearch(e.target.value);
      }}></input>
    </div>
  );
}
