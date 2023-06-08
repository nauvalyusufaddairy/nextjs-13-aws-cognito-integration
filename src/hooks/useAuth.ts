import { LoginValues, RegisterValues } from "@/types";

export function useAuth() {
  const login = async (values: LoginValues, { setSubmitting }: any) => {};
  const register = async (values: RegisterValues) => {
    console.log("heeyy im triggered");
    await fetch("/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        console.log("registration success>>", res.json());
      })
      .catch((err) => {
        console.log("registration error>>", err.json());
      });
  };

  return {
    login,
    register,
  };
}
