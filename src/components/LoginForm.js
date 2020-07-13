import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Animated } from "react-animated-css";

const StyledDiv = styled.div`
  padding: 4px;
  background-color: #191919;
`;

const StyledField = styled(Field)`
  width: 150px;
  text-align: center;
  background: none;
  border: 2px solid #3742fa;
  padding: 14px 10px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  &:focus {
    border-color: white;
    width: 250px;
  }
`;

const StyledForm = styled(Form)`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
`;

const StyleH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  background-color: #5352ed;
  border: 2px solid #3742fa;
  width: 150px;
  height: 30px;
  border-radius: 25px;
  color: white;
  &:hover {
    background-color: transparent;
    border: 2px solid white;
  }
`;

const StyledErrorMessage = styled("div")`
  color: red;
`;
function LoginForm() {
  const history = useHistory();
  return (
    <Animated animationIn='bounceInLeft'>
      <StyledDiv>
        <StyleH1>Login</StyleH1>
        <Formik
          initialValues={{ user: "", password: "" }}
          validationSchema={yup.object({
            user: yup.string().required("Coloque un usuario por favor"),
            password: yup.string().required("Colocar un password"),
          })}
          onSubmit={(values) => {
            sessionStorage.setItem("user", JSON.stringify(values));
            history.push("/");
          }}
        >
          {(values) => {
            return (
              <StyledForm>
                <label>User</label>
                <StyledField name='user' />
                <StyledErrorMessage>
                  <ErrorMessage name='user' />
                </StyledErrorMessage>
                <label>Password</label>
                <StyledField type='password' name='password' />
                <StyledErrorMessage>
                  <ErrorMessage name='password' />
                </StyledErrorMessage>
                <StyledButton type='submit' />
              </StyledForm>
            );
          }}
        </Formik>
      </StyledDiv>
    </Animated>
  );
}

export default LoginForm;
