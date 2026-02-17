export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image skeleton */}
        <div className="h-96 bg-base-300 rounded-xl" />

        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-base-300 rounded w-3/4" />
          <div className="h-6 bg-base-300 rounded w-1/3" />

          <div className="space-y-2">
            <div className="h-4 bg-base-300 rounded" />
            <div className="h-4 bg-base-300 rounded" />
            <div className="h-4 bg-base-300 rounded w-5/6" />
          </div>

          <div className="flex gap-4 mt-6">
            <div className="h-12 w-40 bg-base-300 rounded" />
            <div className="h-12 w-40 bg-base-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}