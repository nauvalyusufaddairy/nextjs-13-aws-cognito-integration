import * as yup from "yup";

export function useValidationSchema() {
  return {
    loginSchema: yup.object().shape({
      email: yup.string().required("email is required"),
      password: yup.string().required("password is required").min(8),
    }),
    registrationSchema: yup.object().shape({
      email: yup.string().required("email is required"),
      password: yup.string().required("password is required").min(8),
      confirm_password: yup
        .string()
        .required("Please confirm your password.")
        .oneOf([yup.ref("password")], "Passwords do not match"),
    }),
  };
}
