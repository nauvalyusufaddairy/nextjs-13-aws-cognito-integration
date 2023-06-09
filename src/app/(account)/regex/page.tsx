"use client";
import {
  Formik,
  Form,
  FormikProps,
  Field,
  FormikState,
  ErrorMessage,
} from "formik";
import React from "react";
import * as yup from "yup";

const Reg = () => {
  const emailSchema = yup.object().shape({
    email: yup
      .string()
      .required("email is required")
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2,})+$/, "huntu"),
  });
  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(e) => console.log(e)}
        validationSchema={emailSchema}
      >
        {({
          handleChange,
          handleSubmit,
          values,
        }: FormikProps<{ email: "" }>) => (
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              name="email"
              value={values.email}
            />
            <ErrorMessage component="div" name="email" />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Reg;
