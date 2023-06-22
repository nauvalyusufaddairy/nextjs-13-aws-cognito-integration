// "use client";
// import { useSearchParams } from "next/navigation";

// const ResgisterConfirm = () => {
//   const useParams = useSearchParams();
//   const email = useParams.get("email");
//   return <div>{email}</div>;
// };

// export default ResgisterConfirm;

"use client";
import React, { useEffect } from "react";

import { Formik, Form, FormikProps, Field, ErrorMessage } from "formik";
import { useAuth } from "@/hooks/useAuth";
import { useValidationSchema } from "@/hooks/useValidationSchema";

import { LoginValues } from "@/types";

const Signin = () => {
  const { login, errorMessage } = useAuth();
  const { loginSchema } = useValidationSchema();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={login}
      validationSchema={loginSchema}
    >
      {({
        isSubmitting,

        handleSubmit,

        errors,
        touched,
      }: FormikProps<LoginValues>) => (
        <Form onSubmit={handleSubmit}>
          <div className=" w-screen h-screen  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 md:px-[500px] md:py-[300px]">
            <div className="w-full h-full flex flex-col items-center rounded-md bg-slate-800 text-white md:px-[36px] md:py-[32px]">
              <h2 className=" text-2xl mb-[42px]">Login Form</h2>
              <div className="w-full h-fit flex flex-col mb-[28px]">
                <Field
                  className={`w-full h-[36px]  bg-transparent rounded-sm pl-2  ring-2 ring-white/50 `}
                  placeholder="email"
                  name="email"
                  type="text"
                />
                {errors.email && touched.email ? (
                  <>
                    {" "}
                    <ErrorMessage
                      component={"div"}
                      name="email"
                      className=" text-orange-300"
                    />
                  </>
                ) : null}
              </div>
              <div className="w-full h-fit flex flex-col mb-[28px]">
                <Field
                  className={`w-full h-[36px]  bg-transparent rounded-sm pl-2  ring-2 ring-white/50 `}
                  placeholder="password"
                  name="password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <>
                    {" "}
                    <ErrorMessage
                      component={"div"}
                      name="password"
                      className=" text-orange-300"
                    />
                  </>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-[150px] h-[36px] bg-white/25 rounded-sm "
              >
                submit
              </button>
              {errorMessage.name !== "" ? (
                <div className="w-full h-fit space-y-2 flex flex-col text-orange-300 mt-4">
                  <span>error type : {errorMessage.name}</span>
                  <span>message : {errorMessage.message}</span>
                </div>
              ) : null}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Signin;
