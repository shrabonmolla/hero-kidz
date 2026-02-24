import CredentialsProvider from "next-auth/providers/credentials";
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
      async authorize(credentials, req) {
        // console.log(credentials);
        const user = await loginUser(credentials);
        console.log("this is form database", user);
        return user;
      },
    }),
    // ...add more providers here
  ],
};
