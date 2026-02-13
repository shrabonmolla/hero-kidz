import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Navlinks from "../buttons/Navlinks";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Navlinks href={"/"}>Home</Navlinks>
      </li>
      <li>
        <Navlinks href={"/products"}>Products</Navlinks>
      </li>
      <li>
        <Navlinks href={"/blog"}>Blog</Navlinks>
      </li>
      <li>
        <Navlinks href={"/contact"}>Contact</Navlinks>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link href={"/"} className="btn btn-primary">
          <FaCartShopping />
        </Link>
        <Link href={"/login"}>
          <button className="btn btn-outline btn-primary">Login</button>
        </Link>
      </div>
    </div>
  );
}
