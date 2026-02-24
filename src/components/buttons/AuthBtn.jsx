"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function AuthBtn() {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" ? (
        <button onClick={() => signOut()} className="btn btn-primary">
          Log Out{" "}
        </button>
      ) : (
        <Link href={`/login`} className="btn btn-primary">
          Log In{" "}
        </Link>
      )}
    </div>
  );
}
