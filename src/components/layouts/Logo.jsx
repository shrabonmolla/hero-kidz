import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-2 justify-center font-bold"
    >
      <Image alt="logo" src={"/assets/logo.png"} width={50} height={40}></Image>
      <h1>
        Hero <span className="text-primary">Kidz</span>
      </h1>
    </Link>
  );
}
