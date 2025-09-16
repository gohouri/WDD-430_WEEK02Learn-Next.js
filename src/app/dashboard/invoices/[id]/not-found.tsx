import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <ExclamationTriangleIcon className="w-12 text-red-500" />
      <h2 className="text-center text-2xl font-semibold text-gray-900">
        Invoice not found
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        The invoice you are looking for does not exist.
      </p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go back to invoices
      </Link>
    </main>
  );
}
