export interface User {
  email: string;
  password: string;
}

interface LoginValues {
  email: string;
  password: string;
}

interface RegisterValues {
  email: string;
  password: string;
  confirm_password: string;
}
