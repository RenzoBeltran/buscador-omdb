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
  padding-top: 25px;
`;

const StyledCard = styled.div`
  height: 600px;
  width: 350px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 15px 25px rgba(175, 175, 175, 0.65);
  position: relative;
  &:hover > div {
    visibility: visible;
  }
`;

const StyledLayer = styled.div`
  visibility: hidden;
  transition: visibility 200ms ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 10;
  background-color: rgba(58, 58, 58, 0.5);
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
            <StyledCard
              onClick={() => {
                addFavoriteMovies({
                  Title: movie.Title,
                  Type: movie.Type,
                  Poster: movie.Poster,
                  Year: movie.Year,
                });
              }}
              img={movie.Poster}
              key={movie.imdbID}
            >
              <StyledLayer>
                <h1>{movie.Title}</h1>
                <h3>{movie.Year}</h3>
              </StyledLayer>
            </StyledCard>
          ))
        )}
      </StyledDiv>
    </>
  );
}

export default Home;
