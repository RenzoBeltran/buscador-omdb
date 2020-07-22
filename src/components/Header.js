import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

const StyledDiv = styled.div`
  background-color: #0f1012;
  text-align: center;
  height: 190px;
  padding-top: 20px;
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid white;
  color: white;
  outline: none;
  text-align: center;
  &::placeholder {
    color: white;
  }
`;

const StyledButton = styled.button`
  margin-left: 10px;
  background-color: darkgray;
  &:hover {
    background-color: black;
  }
  color: white;
  border-radius: 10%;
  border: 1px solid white;
  padding: 5px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const StyledLogout = styled(IoMdExit)`
  font-size: 40px;
  margin-left: 10px;
  cursor: pointer;
`;

const StyledFavorites = styled.button`
  background-color: darkgray;
  &:hover {
    background-color: black;
  }
  color: white;
  border-radius: 10%;
  border: 1px solid white;
  padding: 5px;
  cursor: pointer;
`;

const SettingsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Header({ search, setSearch, getMovies }) {
  const history = useHistory();
  function redirectFavorites() {
    history.push("/favorites");
  }
  return (
    <StyledDiv>
      <h1>Peliculas OMDB</h1>
      <div>
        <StyledInput
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type='search'
          placeholder='Busca una pelicula'
        />
        <StyledButton onClick={getMovies}>Buscar</StyledButton>
      </div>
      <SettingsContainer>
        <StyledFavorites onClick={redirectFavorites}>
          Mis pelis favoritas
        </StyledFavorites>
        <StyledLogout
          onClick={() => {
            history.push("/login");
          }}
        />
      </SettingsContainer>
    </StyledDiv>
  );
}

export default Header;
