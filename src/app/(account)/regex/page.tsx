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
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, "huntu"),
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
            <Field
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

// "use client";
// import React from "react";
// import * as yup from "yup";
// import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";

// const FormTest = () => {
//   const emailValidationSchema = yup.object().shape({
//     email: yup
//       .string()
//       .required("email is required")
//       .matches(
//         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
//         "your email is incorrect"
//       ),
//   });
//   return (
//     <div>
//       <Formik
//         initialValues={{ email: "" }}
//         validationSchema={emailValidationSchema}
//         onSubmit={(e) => {
//           console.log(e.email);
//         }}
//       >
//         {({}: FormikProps<{ email: "" }>) => (
//           <Form>
//             <Field name="email" type="email" placeholder="email" />
//             <ErrorMessage name="email" component="div" />
//             <button type="submit">submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default FormTest;
