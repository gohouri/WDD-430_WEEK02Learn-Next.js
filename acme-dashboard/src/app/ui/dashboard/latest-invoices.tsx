import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default async function LatestInvoices() {
  // Mock data for demo
  const latestInvoices = [
    { id: '1', name: 'Delba de Oliveira', email: 'delba@oliveira.com', amount: 157.95 },
    { id: '2', name: 'Lee Robinson', email: 'lee@robinson.com', amount: 203.48 },
    { id: '3', name: 'Hector Simpson', email: 'hector@simpson.com', amount: 30.40 },
    { id: '4', name: 'Steven Tey', email: 'steven@tey.com', amount: 448.00 },
    { id: '5', name: 'Steph Dietz', email: 'steph@dietz.com', amount: 345.77 },
  ];

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={`flex flex-row items-center justify-between py-4 ${
                  i === 0 ? 'border-t-0' : 'border-t'
                }`}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
