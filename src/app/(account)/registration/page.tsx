// "use client";
// import React from "react";
// import {
//   Formik,
//   Form,
//   FormikProps,
//   Field,
//   FormikState,
//   ErrorMessage,
// } from "formik";
// import { useAuth } from "@/hooks/useAuth";
// import { useValidationSchema } from "@/hooks/useValidationSchema";

// import { RegisterValues } from "@/types";

// const Regiser = () => {
//   const { register } = useAuth();
//   const { registrationSchema } = useValidationSchema();
//   return (
//     <Formik
//       initialValues={{ email: "", password: "", confirm_password: "" }}
//       onSubmit={register}
//       validationSchema={registrationSchema}
//     >
//       {({
//         isSubmitting,
//         values,
//         handleSubmit,
//         handleChange,
//         errors,
//         touched,
//       }: FormikProps<RegisterValues>) => (
//         <form>
//           <div className=" w-screen h-screen  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 md:px-[500px] md:py-[100px]">
//             <div className="w-full h-full flex flex-col items-center rounded-md bg-slate-800 text-white md:px-[36px] md:py-[32px]">
//               <h2 className=" text-2xl mb-[42px]">Registration Form</h2>
//               <input
//                 className={`w-full h-[36px]  bg-transparent rounded-sm pl-2 mb-[28px] ${
//                   errors.email && touched.email
//                     ? "ring-2 ring-red/50"
//                     : "ring-2 ring-white/50"
//                 } `}
//                 placeholder="email"
//                 name="email"
//                 type="text"
//               />
//               <ErrorMessage component={"div"} name="email" />
//               <input
//                 className={`w-full h-[36px] ring-2 ring-white/50 bg-transparent rounded-sm pl-2 mb-[28px] ${
//                   errors.password && touched.password ? "ring-red-800" : ""
//                 }`}
//                 placeholder="password"
//                 type="password"
//                 name="password"
//               />
//               <input
//                 className="w-full h-[36px] ring-2 ring-white/50 bg-transparent rounded-sm pl-2 mb-[32px]"
//                 placeholder="confirm password"
//                 name="confirm_password"
//                 type="password"
//               />
//               <button className="w-[150px] h-[36px] bg-white/25 rounded-sm ">
//                 submit
//               </button>
//             </div>
//           </div>
//         </form>
//       )}
//     </Formik>
//   );
// };

// export default Regiser;
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

function Register() {
  const registrationValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required("email is required")
      .matches(/^\w+([\.-\w])*@\w+([\.-\w+])*\.(\w{2,})+$ /),
  });
  return (
    <div>
      <Formik
        onSubmit={(w) => console.log(w)}
        initialValues={{ email: "", password: "", confirm_password: "" }}
        validationSchema={registrationValidationSchema}
      >
        {({
          errors,
          touched,
        }: FormikProps<{
          email: "";
          password: "";
          confirm_password: "";
        }>) => (
          <Form>
            <div className=" w-screen h-screen  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 md:px-[500px] md:py-[100px]">
              <div className="w-full h-full flex flex-col items-center rounded-md bg-slate-800 text-white md:px-[36px] md:py-[32px]">
                <h2 className=" text-2xl mb-[42px]">Registration Form</h2>
                <input
                  className={`w-full h-[36px]  bg-transparent rounded-sm pl-2 mb-[28px] ${
                    errors.email && touched.email
                      ? "ring-2 ring-red/50"
                      : "ring-2 ring-white/50"
                  } `}
                  placeholder="email"
                  name="email"
                  type="text"
                />
                <ErrorMessage component={"div"} name="email" />
                <input
                  className={`w-full h-[36px] ring-2 ring-white/50 bg-transparent rounded-sm pl-2 mb-[28px] ${
                    errors.password && touched.password ? "ring-red-800" : ""
                  }`}
                  placeholder="password"
                  type="password"
                  name="password"
                />
                <input
                  className="w-full h-[36px] ring-2 ring-white/50 bg-transparent rounded-sm pl-2 mb-[32px]"
                  placeholder="confirm password"
                  name="confirm_password"
                  type="password"
                />
                <button className="w-[150px] h-[36px] bg-white/25 rounded-sm ">
                  submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
