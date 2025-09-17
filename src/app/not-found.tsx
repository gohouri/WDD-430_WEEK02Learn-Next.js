import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="text-xl font-semibold">Not Found</h2>
      <p className="text-gray-600">Could not find requested resource</p>
      <Link
        href="/dashboard"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}
