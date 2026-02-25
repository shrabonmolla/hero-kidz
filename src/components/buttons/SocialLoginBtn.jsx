"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SocialLoginBtn() {
  const params = useSearchParams();

  const handleGoogleLogin = async () => {
    // console.log("Google Login Clicked");
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "",
    });

    console.log(result);
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline w-full flex items-center gap-2"
    >
      <FcGoogle size={20} />
      Continue with Google
    </button>
  );
}
