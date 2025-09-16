'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string().min(1, 'Please select a customer.'),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(prevState: string | undefined, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  
  // Mock implementation for demo - in a real app, you'd save to database
  console.log('Creating invoice:', {
    customerId,
    amount: `$${amount}`,
    status,
    date: new Date().toISOString().split('T')[0]
  });
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices?success=true');
}

export async function updateInvoice(id: string, prevState: string | undefined, formData: FormData) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  // Mock implementation for demo
  console.log('Updating invoice:', id, validatedFields.data);

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // Mock implementation for demo
  console.log('Deleting invoice:', id);
  
  revalidatePath('/dashboard/invoices');
  return { message: 'Deleted Invoice.' };
}