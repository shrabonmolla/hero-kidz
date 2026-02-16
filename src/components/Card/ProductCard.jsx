import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { image, title, price, discount, sold, ratings, description } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-sm">
      <figure className="p-4">
        <Image
          width={80}
          height={70}
          src={image}
          alt={title}
          className="rounded-xl h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold line-clamp-2">
          {title}
        </h2>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-gray-400">৳{price}</span>
          )}
          {discount > 0 && (
            <span className="badge badge-primary">-{discount}%</span>
          )}
        </div>

        {/* Rating & Sold */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span>{ratings}</span>
          </div>
          <span>{sold} sold</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Buttons */}
        <div className="card-actions justify-between mt-4">
          <button className="btn btn-outline btn-primary">View Details</button>

          <button className="btn btn-primary flex items-center gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
