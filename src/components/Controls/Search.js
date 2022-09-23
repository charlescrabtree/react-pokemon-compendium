import React from 'react';
import './Search.css';

export default function Search({ setSearch }) {
  return (
    <>
      <form className='search' onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const searchData = data.get('search');
        //console.log('searchData', searchData);
        setSearch(searchData);}}>
        <label htmlFor="search">SEARCH FOR A POKEMON
          <input name="search" placeholder="enter name" />
          <button>GO</button>
        </label>
      </form>
    </>
  );
}