import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Card from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Acme Dashboard',
  description: 'The official Next.js Learn Dashboard built with App Router.',
};

export default async function Page() {
  // Check authentication server-side
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('isAuthenticated');
  const isAuthenticated = authCookie?.value === 'true';
  
  console.log('Auth check - Cookie:', authCookie);
  console.log('Auth check - Is authenticated:', isAuthenticated);
  
  if (!isAuthenticated) {
    console.log('Redirecting to login...');
    redirect('/login');
  }

  // Mock data for demo
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
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}