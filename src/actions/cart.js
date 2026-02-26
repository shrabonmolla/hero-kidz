"use server";

import { authOptions } from "@/lib/authOptions";
import { dbconnect } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

const cartColl = dbconnect("carts");

export async function handleCart(productId) {
  // 1. geeting current user
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { sucess: false };

  // 2. get cartItem with user.email and productId
  const query = {};
  query.email = user?.email;
  query.productId = new ObjectId(productId);

  const isAdded = await cartColl.findOne(query);

  // 3. if cartItem found ---> update queantity -----> add cartItem
  if (isAdded) {
    const updatedDoc = {
      $inc: {
        quantity: 1,
      },
    };
    const result = await cartColl.updateOne(query, updatedDoc);
    return { sucess: Boolean(result.modifiedCount) };
  } else {
    const product = await dbconnect("products").findOne({
      _id: new ObjectId(productId),
    });

    const newData = {
      productId: product?._id,
      title: product?.title,
      image: product?.image,
      price: product?.price,
      quantity: 1,
      email: user?.email,
    };

    const result = await cartColl.insertOne(newData);
    return { sucess: result.acknowledged };
  }
}

export async function getCart() {
  const { user } = await getServerSession(authOptions);

  const query = {};
  query.email = user?.email;

  const result = dbconnect("carts").find(query).toArray();
  return result;
  // console.log(result);
}

export async function deleteCart(id) {
  const { user } = await getServerSession(authOptions);

  const query = {};
  query.email = user?.email;
  query._id = new ObjectId(id);

  const result = await dbconnect("carts").deleteOne(query);
  console.log(result);
  return result;
}

export async function increaseCartItem(id) {
  const { user } = await getServerSession(authOptions);

  const query = {};
  query.email = user?.email;
  query._id = new ObjectId(id);

  const updatedDoc = {
    $inc: {
      quantity: 1,
    },
  };

  const result = await dbconnect("carts").updateOne(query, updatedDoc);

  return result;
}

export async function decreaseCartItem(id) {
  const { user } = await getServerSession(authOptions);

  const query = {};
  query.email = user?.email;
  query._id = new ObjectId(id);

  const updatedDoc = {
    $inc: {
      quantity: -1,
    },
  };

  const result = await dbconnect("carts").updateOne(query, updatedDoc);
  console.log(result);
  return result;
}
