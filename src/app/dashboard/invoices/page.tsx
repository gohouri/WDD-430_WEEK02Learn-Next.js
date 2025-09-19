import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Pagination from '@/app/ui/pagination';
import InvoicesTable from '@/app/ui/invoices/table';
import { fetchInvoicesPages } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
  description: 'View and manage your invoices.',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  // Check authentication server-side
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('isAuthenticated')?.value === 'true';
  
  if (!isAuthenticated) {
    redirect('/login');
  }

  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || '';
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}