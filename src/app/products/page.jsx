import ProductCard from "@/components/Card/ProductCard";
import React from "react";

export default async function Products() {
  const res = await fetch("http://localhost:3000/api/products");
  const productsData = await res.json();
  //   console.log(productsData.result);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4">Products</h1>
      <section className=" justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 w-11/12 container  ">
        {productsData.result.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </section>
    </div>
  );
}
