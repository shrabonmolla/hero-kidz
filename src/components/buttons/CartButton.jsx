"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartButton({ product }) {
  const router = useRouter();
  const path = usePathname();
  const isLogin = false;

  function add2cart() {
    if (isLogin) {
      alert(product.title);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  }
  return (
    <button
      onClick={add2cart}
      className="btn btn-primary flex items-center gap-2"
    >
      <FaShoppingCart />
      Add to Cart
    </button>
  );
}
