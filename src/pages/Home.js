import React, { useState } from "react";
import Header from "../components/Header";
import getData from "../api/getData";
import { useHistory } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  async function getMovies() {
    const data = await getData(process.env.REACT_APP_OMDB, {
      params: { s: search },
    });
    setMovies(data.Search);
  }
  function addFavoriteMovies(movie) {
    if (localStorage.getItem(sessionStorage.getItem("user")) != null) {
      if (
        JSON.parse(localStorage.getItem(sessionStorage.getItem("user"))).filter(
          (favoriteMovies) => {
            return movie.Title === favoriteMovies.Title;
          }
        ).length < 1
      ) {
        localStorage.setItem(
          sessionStorage.getItem("user"),
          JSON.stringify([
            ...JSON.parse(localStorage.getItem(sessionStorage.getItem("user"))),
            movie,
          ])
        );
      }
    } else {
      localStorage.setItem(
        sessionStorage.getItem("user"),
        JSON.stringify([movie])
      );
    }
  }

  if (sessionStorage.getItem("user") == null) {
    history.push("/login");
  }
  return (
    <>
      <Header search={search} setSearch={setSearch} getMovies={getMovies} />
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt='' />
          <h3>{movie.Year}</h3>
          <button
            onClick={() => {
              addFavoriteMovies({
                Title: movie.Title,
                Type: movie.Type,
                Poster: movie.Poster,
                Year: movie.Year,
              });
            }}
          >
            Agregar a Favoritos
          </button>
        </div>
      ))}
    </>
  );
}

export default Home;
