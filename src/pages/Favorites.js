import React from "react";

function Favorites() {
  return (
    <div>
      <h1>Aquí va mi lista de peliculas favoritas</h1>
      {JSON.parse(localStorage.getItem(sessionStorage.getItem("user"))).map(
        (favoriteMovie) => (
          <div key={favoriteMovie.Title}>
            <h1>{favoriteMovie.Title}</h1>
            <h3>{favoriteMovie.Year}</h3>
            <img src={favoriteMovie.Poster} alt='' />
          </div>
        )
      )}
    </div>
  );
}

export default Favorites;
