import Image from "next/image";
import { notFound } from "next/navigation";

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.result;
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  // If no product found → show 404 page
  if (!product) {
    notFound();
  }

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            <span className="line-through text-gray-400">৳{product.price}</span>
            <span className="badge badge-primary">-{product.discount}%</span>
          </div>

          <p className="text-gray-600 whitespace-pre-line">
            {product.description}
          </p>

          {/* Info list */}
          <ul className="list-disc pl-5 space-y-1">
            {product.info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Q&A Section */}
      {product.qna?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Questions & Answers</h2>

          <div className="space-y-4">
            {product.qna.map((qa, i) => (
              <div key={i} className="bg-base-200 p-4 rounded-lg">
                <p className="font-semibold">{qa.question}</p>
                <p className="text-gray-600">{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
