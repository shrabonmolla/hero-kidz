import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { loginUser } from "@/actions/server";
import { dbconnect } from "@/lib/dbconnect";
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

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user, account, profile, email, credentials);

      const newUser = {
        name: user.name,
        email: user.email,
        image: user.image,
        provider: account.provider,
      };

      const result = await dbconnect("user").insertOne(newUser);
      return result;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};
