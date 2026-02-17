const {
  ProductCardSkeleton,
} = require("@/components/skeleton/ProductCardSkeleton ");

export default function Loading() {
  return (
    <section className=" justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 container gap-4 ">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </section>
  );
}
