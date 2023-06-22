import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "credential",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email",
        },
        password: {
          label: "password",
          placeholder: "password",
          type: "text",
        },
      },
      async authorize(credential) {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credential?.email,
            password: credential?.password,
          }),
        });
        const data = await res.json();

        if (res.status === 200) {
          console.log("status >>>", res.status);
          return data;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
  },
};
