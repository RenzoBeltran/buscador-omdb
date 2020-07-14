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
  padding-top: 30px;
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

const BackIcon = styled(AiOutlineLeft)`
  font-size: 35px;
  cursor: pointer;
`;

const FavoriteMoviesHeader = styled.div`
  margin-bottom: 20px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <FavoriteMoviesHeader>
        <BackIcon onClick={goBack} />
        <StyledTitle>Tus peliculas favoritas</StyledTitle>
      </FavoriteMoviesHeader>
      <StyledDiv>
        {JSON.parse(localStorage.getItem(sessionStorage.getItem("user"))).map(
          (favoriteMovie) => (
            <StyledCard img={favoriteMovie.Poster} key={favoriteMovie.Title}>
              <StyledLayer>
                <h1>{favoriteMovie.Title}</h1>
                <h3>{favoriteMovie.Year}</h3>
              </StyledLayer>
            </StyledCard>
          )
        )}
      </StyledDiv>
    </StyledContainer>
  );
}

export default Favorites;
