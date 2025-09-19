'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { addMockInvoice, updateMockInvoice, deleteMockInvoice } from './data';

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

export async function createInvoice(formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    console.error('Validation failed:', validatedFields.error.flatten().fieldErrors);
    return;
  }

  const { customerId, amount, status } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  // Add invoice to our dynamic mock data
  const newInvoice = addMockInvoice({
    customerId,
    amount,
    status,
    date
  });

  console.log('Mock: Created invoice:', newInvoice);
  
  // Simulate a small delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices?success=true');
}

export async function updateInvoice(id: string, formData: FormData) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    console.error('Validation failed:', validatedFields.error.flatten().fieldErrors);
    return;
  }

  const { customerId, amount, status } = validatedFields.data;

  // Update invoice in our dynamic mock data
  const updatedInvoice = updateMockInvoice(id, {
    customerId,
    amount,
    status
  });

  if (updatedInvoice) {
    console.log('Mock: Updated invoice:', updatedInvoice);
  } else {
    console.log('Mock: Invoice not found for update:', id);
  }
  
  // Simulate a small delay
  await new Promise(resolve => setTimeout(resolve, 100));

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // Delete invoice from our dynamic mock data
  const deleted = deleteMockInvoice(id);
  
  if (deleted) {
    console.log('Mock: Deleted invoice', id);
  } else {
    console.log('Mock: Invoice not found for deletion:', id);
  }
  
  // Simulate a small delay
  await new Promise(resolve => setTimeout(resolve, 100));

  revalidatePath('/dashboard/invoices');
}

export async function authenticate(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Simple authentication check
  if (email === 'admin@nextjs.com' && password === 'password123') {
    // Set authentication cookie
    const cookieStore = await cookies();
    cookieStore.set('isAuthenticated', 'true', {
      path: '/',
      maxAge: 86400, // 24 hours
      httpOnly: false, // Allow client-side access
      secure: false, // For development
      sameSite: 'lax'
    });
    
    console.log('Authentication successful, redirecting to dashboard');
    redirect('/dashboard');
  } else {
    console.log('Authentication failed, redirecting to login');
    redirect('/login?error=Invalid credentials');
  }
}