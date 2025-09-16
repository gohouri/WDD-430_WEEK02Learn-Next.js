import Card from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Acme Dashboard',
  description: 'The official Next.js Learn Dashboard built with App Router.',
};

export default async function Page() {
  // Mock data for demonstration
  const numberOfInvoices = 12;
  const numberOfCustomers = 8;
  const totalPaidInvoices = '$52,920.00';
  const totalPendingInvoices = '$7,395.00';

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="w-full md:col-span-4">
          <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Recent Revenue
          </h2>
          <div className="rounded-xl bg-gray-50 p-4">
            <div className="text-center text-gray-500">
              Revenue chart would be displayed here
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col md:col-span-4">
          <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Latest Invoices
          </h2>
          <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
            <div className="text-center text-gray-500">
              Latest invoices would be displayed here
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}