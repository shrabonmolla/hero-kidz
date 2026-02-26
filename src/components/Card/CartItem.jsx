"use client";

import { decreaseCartItem, deleteCart, increaseCartItem } from "@/actions/cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function CartItem({ item }) {
  const { title, image, price, quantity, email, _id } = item;

  const routr = useRouter();

  async function handledeleteCart(id) {
    await deleteCart(id);
    routr.refresh();
  }

  async function handelIncrease(id) {
    await increaseCartItem(id);
    routr.refresh();
  }

  async function handelDecrease(id) {
    await decreaseCartItem(id);
    routr.refresh();
  }

  return (
    <div className="card card-side bg-base-100 shadow-md border border-base-300 p-4 rounded-2xl">
      {/* Product Image */}
      <figure className="w-32 h-32 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </figure>

      {/* Product Info */}
      <div className="card-body p-4">
        <h2 className="card-title text-primary text-lg">{title}</h2>

        <p className="text-neutral text-sm">
          Buyer: <span className="font-medium">{email}</span>
        </p>

        <p className="text-lg font-semibold">৳ {price}</p>

        {/* Quantity + Actions */}
        <div className="flex items-center justify-between mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-base-200 px-3 py-1 rounded-xl">
            <button
              onClick={() => handelDecrease(_id)}
              className="btn btn-xs btn-circle btn-secondary"
            >
              <FaMinus size={12} />
            </button>

            <span className="font-medium">{quantity}</span>

            <button
              onClick={() => handelIncrease(_id)}
              className="btn btn-xs btn-circle btn-primary"
            >
              <FaPlus size={12} />
            </button>
          </div>

          {/* Delete Button */}
          <button
            onClick={() => handledeleteCart(_id)}
            className="btn btn-sm btn-error btn-outline"
          >
            <FaTrash className="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
