import { getCart } from "@/actions/cart";
import CartItem from "@/components/Card/CartItem";

export default async function Cart() {
  const carts = await getCart();

  return (
    <div>
      <div className="text-4xl">{carts.length}</div>:
      <section className="grid grid-cols-1 gap-2">
        {carts.map((cart, i) => (
          <CartItem item={cart} key={i}></CartItem>
        ))}
      </section>
    </div>
  );
}
