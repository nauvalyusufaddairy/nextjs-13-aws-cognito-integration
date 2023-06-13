export interface User {
  email: string;
  password: string;
}

interface LoginValues {
  email: string;
  password: string;
}

interface ConfirmRegistration {
  code: string;
  email: string;
}

interface RegisterValues {
  email: string;
  password: string;
  confirm_password: string;
}
type ErrorHandling = {
  name: string;
  message: string;
};
