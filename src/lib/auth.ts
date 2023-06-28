import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
const { NEXT_PUBLIC_SECRET } = process.env;

export const authOptions: NextAuthOptions = {
  secret: NEXT_PUBLIC_SECRET!,
  session: {
    strategy: "jwt",
  },
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

        if (data) {
          console.log("status >>>", data);
          return data;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token }) {
      session.user = token as any;
      return session;
    },
    signIn({ account }) {
      console.log("ini akun loh", account);
      return true;
    },
  },
};
