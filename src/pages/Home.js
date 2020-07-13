import React, { useState } from "react";
import Header from "../components/Header";
import getData from "../api/getData";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #3b3f47;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 100%;
  max-height: auto;
`;

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  async function getMovies() {
    const response = await getData(process.env.REACT_APP_OMDB, {
      params: { s: search },
    });

    if (response.data.Response === "False") {
      setMovies(false);
    } else {
      setMovies(response.data.Search);
    }
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
      <StyledDiv>
        {movies === false ? (
          <h1>No se encontraron resultados :c</h1>
        ) : (
          movies.map((movie) => (
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
          ))
        )}
      </StyledDiv>
    </>
  );
}

export default Home;
