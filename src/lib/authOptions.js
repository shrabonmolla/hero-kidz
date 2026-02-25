import CredentialsProvider from "next-auth/providers/credentials";
import { dbconnect } from "./dbconnect";
import { loginUser } from "@/actions/server";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        // email: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        const user = await loginUser(credentials);

        console.log("user after login", user);

        if (!user) return null;

        // return {
        //   id: user._id.toString(),
        //   email: user.email,
        //   name: user.name,
        // };

        return user;
      },
    }),
  ],
};
