import React, { useState } from "react";
import Header from "../components/Header";
import getData from "../api/getData";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    const data = await getData("http://www.omdbapi.com/?apikey=f8de466f", {
      params: { s: search },
    });
    setMovies(data.Search);
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} getMovies={getMovies} />
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt='' />
          <h3>{movie.Year}</h3>
        </div>
      ))}
    </>
  );
}

export default Home;
