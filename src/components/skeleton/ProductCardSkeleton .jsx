export function ProductCardSkeleton() {
  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-sm animate-pulse">
      {/* Image Skeleton */}
      <figure className="p-4">
        <div className="rounded-xl h-56 w-full bg-base-300" />
      </figure>

      <div className="card-body space-y-3">
        {/* Title */}
        <div className="h-5 bg-base-300 rounded w-3/4" />
        <div className="h-5 bg-base-300 rounded w-1/2" />

        {/* Price */}
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-base-300 rounded" />
          <div className="h-6 w-16 bg-base-300 rounded" />
        </div>

        {/* Rating & Sold */}
        <div className="flex justify-between">
          <div className="h-4 w-16 bg-base-300 rounded" />
          <div className="h-4 w-14 bg-base-300 rounded" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-base-300 rounded" />
          <div className="h-4 bg-base-300 rounded" />
          <div className="h-4 bg-base-300 rounded w-5/6" />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <div className="h-10 flex-1 bg-base-300 rounded" />
          <div className="h-10 flex-1 bg-base-300 rounded" />
        </div>
      </div>
    </div>
  );
}
