export function CardSkeleton() {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <div className="h-5 w-5 text-gray-200" />
        <div className="ml-2 h-4 w-16 rounded bg-gray-200" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded bg-gray-200" />
      </div>
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded bg-gray-200" />
              <div className="ml-2 h-4 w-32 rounded bg-gray-200" />
            </div>
            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded bg-gray-200" />
              <div className="ml-2 h-4 w-32 rounded bg-gray-200" />
            </div>
            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded bg-gray-200" />
              <div className="ml-2 h-4 w-32 rounded bg-gray-200" />
            </div>
            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded bg-gray-200" />
              <div className="ml-2 h-4 w-32 rounded bg-gray-200" />
            </div>
            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded bg-gray-200" />
              <div className="ml-2 h-4 w-32 rounded bg-gray-200" />
            </div>
            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="w-full md:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
            <div className="h-4 w-4 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gray-100" />
          <div className="h-6 w-24 rounded bg-gray-100" />
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100" />
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100" />
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100" />
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100" />
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100" />
          <div className="h-[38px] w-[38px] rounded bg-gray-100" />
        </div>
      </td>
    </tr>
  );
}
