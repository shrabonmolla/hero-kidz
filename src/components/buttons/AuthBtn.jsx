"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function AuthBtn() {
  const session = useSession();
  console.log(session);

  return (
    <div>
      {session.status === "authenticated" ? (
        <div className="flex  justify-end">
          Signed in as {session.data.user.email}
          <button onClick={() => signOut()} className="btn btn-primary">
            Log Out{" "}
          </button>
        </div>
      ) : (
        <Link href={`/login`} className="btn btn-primary">
          Log In{" "}
        </Link>
      )}
    </div>
  );
}
