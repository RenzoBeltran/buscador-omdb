import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: center;
  background-color: #2f3542;
  flex-wrap: wrap;
`;
function Login() {
  return (
    <StyledDiv>
      <LoginForm />
    </StyledDiv>
  );
}

export default Login;
