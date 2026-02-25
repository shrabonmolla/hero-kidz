"use client";

import { handleCart } from "@/actions/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartButton({ product }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const session = useSession();
  const isLogin = session.status == "authenticated";

  async function add2cart() {
    setLoading(true);
    if (isLogin) {
      alert("are you sure you want to add this item  to cart");
      const result = await handleCart(product._id);
      if (result.sucess) {
        alert("cart added sucessfully");
        setLoading(false);
      }
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  }
  return (
    <button
      disabled={loading}
      onClick={add2cart}
      className="btn btn-primary flex items-center gap-2"
    >
      <FaShoppingCart />
      Add to Cart
    </button>
  );
}
