import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  height: auto;
  color: black;
  padding: 15px;
  border: 3px solid yellow;
  border-radius: 10%;
  margin-right: 8px;
  margin-top: 6px;
`;

function FlashMessage({ message }) {
  return ReactDOM.createPortal(
    <StyledDiv>{message}</StyledDiv>,
    document.getElementById("toast")
  );
}

export default FlashMessage;
