"use server";

const { dbconnect } = require("@/lib/dbconnect");

export async function postUser(payload) {
  const { name, email, password } = payload;
  const newUser = {
    provider: "credentail",
    name: name,
    email: email,
    password: password,
    role: "user",
  };

  const result = await dbconnect("user").insertOne(newUser);
  return result;
}

// export async function loginUser(payload) {
//   const { email } = payload;

//   const user = await dbconnect("user").findOne({ email: email });
//   return user;
// }

export async function loginUser(payload) {
  const { email } = payload;

  const user = await dbconnect("user").findOne({ email: email });

  return user;
}
