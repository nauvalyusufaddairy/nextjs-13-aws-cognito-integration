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
import { useSearchParams } from "next/navigation";
import {
  Formik,
  Form,
  FormikProps,
  Field,
  FormikState,
  ErrorMessage,
} from "formik";
import { useAuth } from "@/hooks/useAuth";
import { useValidationSchema } from "@/hooks/useValidationSchema";

import { ConfirmRegistration, RegisterValues } from "@/types";

const ConfirmReg = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") as string;
  const { confirm_registration, errorMessage } = useAuth();
  const { confirmRegistrationSchema } = useValidationSchema();

  return (
    <Formik
      initialValues={{ email, code: "" }}
      onSubmit={confirm_registration}
      validationSchema={confirmRegistrationSchema}
    >
      {({
        isSubmitting,

        handleSubmit,

        errors,
        touched,
      }: FormikProps<ConfirmRegistration>) => (
        <Form onSubmit={handleSubmit}>
          <div className=" w-screen h-screen  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 md:px-[500px] md:py-[300px]">
            <div className="w-full h-full flex flex-col items-center rounded-md bg-slate-800 text-white md:px-[36px] md:py-[32px]">
              <h2 className=" text-2xl mb-[42px]">Confirm Registration</h2>
              <div className="w-full h-fit flex flex-col mb-[28px]">
                <Field
                  className={`w-full h-[36px]  bg-transparent rounded-sm pl-2  ring-2 ring-white/50 `}
                  placeholder="enter your confirmation code"
                  name="code"
                  type="text"
                />
                {errors.code && touched.code ? (
                  <>
                    {" "}
                    <ErrorMessage
                      component={"div"}
                      name="code"
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

export default ConfirmReg;
