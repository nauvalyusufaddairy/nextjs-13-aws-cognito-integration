import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      const pathname = req.url;
      console.log("pathnaem ", pathname);

      if (token) return true;
      if (pathname === "http://localhost:3000/api/login") return true;
      if (pathname === "http://localhost:3000/registration/confirmation")
        return true;
      if (pathname === "http://localhost:3000/registration") return true;
      if (pathname === "http://localhost:3000/api/register") return true;
      if (pathname === "http://localhost:3000/api/confirm_code") return true;
      if (pathname === "http://localhost:3000/api/resend_code") return true;

      return false;
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
    verifyRequest: "/registration/confirmation",
    newUser: "/registration",
  },
});
