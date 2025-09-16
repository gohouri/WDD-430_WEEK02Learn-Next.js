'use client';

import { useState } from 'react';
import Link from 'next/link';
import { updateInvoice } from '@/app/lib/actions';
import { lusitana } from '@/app/ui/fonts';

export default function EditInvoiceForm({
  invoice,
}: {
  invoice: {
    id: string;
    customer_id: string;
    amount: number;
    status: string;
    name?: string;
    email?: string;
    image_url?: string;
  };
}) {
  const [customer, setCustomer] = useState(invoice.customer_id);
  const [amount, setAmount] = useState(invoice.amount.toString());
  const [status, setStatus] = useState(invoice.status);

  const customers = [
    { id: '1', name: 'Customer A' },
    { id: '2', name: 'Customer B' },
    { id: '3', name: 'Customer C' },
    { id: '4', name: 'Customer D' },
    { id: '5', name: 'Customer E' },
    { id: '6', name: 'Customer F' },
    { id: '7', name: 'Customer G' },
    { id: '8', name: 'Customer H' },
    { id: '9', name: 'Customer I' },
    { id: '10', name: 'Customer J' },
  ];

  return (
    <main>
      <div className="mb-6">
        <h1 className={`${lusitana.className} text-2xl`}>Edit Invoice</h1>
      </div>
      <form action={updateInvoice.bind(null, invoice.id)} className="space-y-6">
        {/* Customer Selection */}
        <div>
          <label htmlFor="customerId" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <select
            id="customerId"
            name="customerId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue={customer}
            aria-describedby="customer-error"
            onChange={(e) => setCustomer(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a customer
            </option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        {/* Invoice Amount */}
        <div className="mt-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="pointer-events-none absolute left-0 top-0 flex h-full w-10 items-center justify-center text-gray-400">
              $
            </div>
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="Enter USD amount"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="amount-error"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset className="mt-4">
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="status-error"
                  checked={status === 'pending'}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="status-error"
                  checked={status === 'paid'}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Update Invoice
          </button>
        </div>
      </form>
    </main>
  );
}
