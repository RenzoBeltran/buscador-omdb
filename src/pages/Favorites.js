import React from "react";

function Favorites() {
  if (localStorage.getItem(sessionStorage.getItem("user")) == null) {
    return <h1>Usted no ha escogido peliculas favoritas</h1>;
  }
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
