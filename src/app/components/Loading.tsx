
export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <div className="h-10 w-48 bg-gray-200 rounded mb-6 animate-pulse"></div>

      <div className="h-16 w-full bg-gray-200 rounded mb-8 animate-pulse"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div
              key={index}
              className="border p-4 rounded-lg h-75 flex flex-col shadow animate-pulse"
            >
              <div className="h-48 w-full bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
              <div className="mt-auto flex justify-between">
                <div className="rounded bg-gray-200 h-6 w-16"></div>
                <div className="rounded bg-gray-200 h-6 w-16"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
