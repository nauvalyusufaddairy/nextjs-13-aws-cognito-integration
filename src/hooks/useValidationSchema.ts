import * as yup from "yup";

export function useValidationSchema() {
  return {
    loginSchema: yup.object().shape({
      email: yup
        .string()
        .required("email is required")
        .matches(/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, {
          message: "email must be following like example@example.com",
        }),
      password: yup
        .string()
        .required("password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Password at least length of 8 contain at least one or more Number, Uppercase also Lowercase and contain at least one or more special character @$!%*?&"
        ),
    }),
    registrationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email is required")
        .matches(/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, {
          message: "email must be following like example@example.com",
        }),
      password: yup
        .string()
        .required("password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Password at least length of 8 contain at least one or more Number, Uppercase also Lowercase and contain at least one or more special character @$!%*?&"
        ),
      confirm_password: yup
        .string()
        .required("Please confirm your password.")
        .oneOf([yup.ref("password")], "Passwords do not match"),
    }),
    confirmRegistrationSchema: yup.object().shape({
      email: yup.string().required(),
      code: yup.number().required("confirma registration code is required"),
    }),
  };
}
