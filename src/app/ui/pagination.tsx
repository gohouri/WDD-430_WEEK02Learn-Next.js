import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Pagination({
  totalPages,
}: {
  totalPages: number;
}) {
  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={`/dashboard/invoices?page=${1}`}
        isDisabled={true}
      />
      <PaginationArrow
        direction="right"
        href={`/dashboard/invoices?page=${totalPages}`}
        isDisabled={true}
      />
    </div>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  if (isDisabled) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-gray-300">
        {icon}
      </div>
    );
  }

  return (
    <Link
      className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-100"
      href={href}
    >
      {icon}
    </Link>
  );
}
