import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "./Button";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  return (
    <div>
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
            <Form>
              <Field name='user' />
              <ErrorMessage name='user' />
              <Field type='password' name='password' />
              <ErrorMessage name='password' />
              <Button />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginForm;
