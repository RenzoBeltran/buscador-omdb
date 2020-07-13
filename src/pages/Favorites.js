import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 100%;
  max-height: auto;
`;
const StyledContainer = styled.div`
  background-color: #3b3f47;
  border: 1px solid transparent;
  min-height: 100%;
  max-height: auto;
`;

const StyledTitle = styled.h1`
  display: inline-block;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

const BackIcon = styled(AiOutlineLeft)`
  font-size: 35px;
  cursor: pointer;
`;

function Favorites() {
  const history = useHistory();
  function goBack() {
    history.push("/");
  }
  if (localStorage.getItem(sessionStorage.getItem("user")) == null) {
    return (
      <StyledContainer>
        <div>
          <BackIcon onClick={goBack} />
          <StyledTitle>Usted no ha escogido peliculas favoritas</StyledTitle>
        </div>
      </StyledContainer>
    );
  }
  return (
    <StyledContainer>
      <div>
        <BackIcon onClick={goBack} />
        <StyledTitle>Tus peliculas favoritas</StyledTitle>
      </div>
      <StyledDiv>
        {JSON.parse(localStorage.getItem(sessionStorage.getItem("user"))).map(
          (favoriteMovie) => (
            <div key={favoriteMovie.Title}>
              <h1>{favoriteMovie.Title}</h1>
              <h3>{favoriteMovie.Year}</h3>
              <img src={favoriteMovie.Poster} alt='' />
            </div>
          )
        )}
      </StyledDiv>
    </StyledContainer>
  );
}

export default Favorites;
