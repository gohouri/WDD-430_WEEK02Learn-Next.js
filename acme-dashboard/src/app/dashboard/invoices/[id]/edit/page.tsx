import { notFound } from 'next/navigation';
import EditInvoiceForm from '@/app/ui/invoices/edit-form';

export default async function EditInvoicePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  
  // Mock invoice data for demo
  const invoice = {
    id: id,
    customer_id: '1',
    amount: 100.00,
    status: 'pending',
    name: 'Demo Customer',
    email: 'demo@example.com',
    image_url: '/customers/demo.png'
  };

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <EditInvoiceForm invoice={invoice} />
    </main>
  );
}
