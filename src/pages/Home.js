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
  if (sessionStorage.getItem("usuario") == null) {
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
        </div>
      ))}
    </>
  );
}

export default Home;
