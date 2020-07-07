import React from "react";

function Header({ search, setSearch, getMovies }) {
  return (
    <header>
      <div>Búscador de peliculas</div>
      <div>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type='search'
          placeholder='Busca una pelicula'
        />
        <button onClick={getMovies}>Buscar</button>
      </div>
    </header>
  );
}

export default Header;
