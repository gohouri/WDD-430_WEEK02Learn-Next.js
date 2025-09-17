import { unstable_noStore as noStore } from 'next/cache';

// Simple in-memory storage for demo purposes
const mockInvoices = [
  { id: '1', name: 'Delba de Oliveira', email: 'delba@oliveira.com', amount: 15795, date: '2023-12-16', status: 'pending' },
  { id: '2', name: 'Lee Robinson', email: 'lee@robinson.com', amount: 20348, date: '2023-11-14', status: 'paid' },
  { id: '3', name: 'Hector Simpson', email: 'hector@simpson.com', amount: 3040, date: '2023-10-29', status: 'paid' },
  { id: '4', name: 'Steven Tey', email: 'steven@tey.com', amount: 44800, date: '2023-10-04', status: 'paid' },
  { id: '5', name: 'Steph Dietz', email: 'steph@dietz.com', amount: 34577, date: '2023-10-01', status: 'pending' },
];

const mockCustomers = [
  { id: '1', name: 'Delba de Oliveira', email: 'delba@oliveira.com', image_url: '/customers/delba-de-oliveira.png' },
  { id: '2', name: 'Lee Robinson', email: 'lee@robinson.com', image_url: '/customers/lee-robinson.png' },
  { id: '3', name: 'Hector Simpson', email: 'hector@simpson.com', image_url: '/customers/hector-simpson.png' },
  { id: '4', name: 'Steven Tey', email: 'steven@tey.com', image_url: '/customers/steven-tey.png' },
  { id: '5', name: 'Steph Dietz', email: 'steph@dietz.com', image_url: '/customers/steph-dietz.png' },
  { id: '6', name: 'Michael Novotny', email: 'michael@novotny.com', image_url: '/customers/michael-novotny.png' },
  { id: '7', name: 'Evil Rabbit', email: 'evil@rabbit.com', image_url: '/customers/evil-rabbit.png' },
  { id: '8', name: 'Emil Kowalski', email: 'emil@kowalski.com', image_url: '/customers/emil-kowalski.png' },
  { id: '9', name: 'Amy Burns', email: 'amy@burns.com', image_url: '/customers/amy-burns.png' },
  { id: '10', name: 'Balazs Orban', email: 'balazs@orban.com', image_url: '/customers/balazs-orban.png' },
];

// Function to add a new invoice
export function addMockInvoice(invoiceData: {
  customerId: string;
  amount: number;
  status: 'pending' | 'paid';
  date: string;
}) {
  const customer = mockCustomers.find(c => c.id === invoiceData.customerId);
  const newInvoice = {
    id: (mockInvoices.length + 1).toString(),
    name: customer?.name || 'Unknown Customer',
    email: customer?.email || 'unknown@example.com',
    amount: Math.round(invoiceData.amount * 100), // Convert to cents
    date: invoiceData.date,
    status: invoiceData.status,
  };
  mockInvoices.unshift(newInvoice); // Add to beginning
  return newInvoice;
}

// Function to update an invoice
export function updateMockInvoice(id: string, invoiceData: {
  customerId: string;
  amount: number;
  status: 'pending' | 'paid';
}) {
  const customer = mockCustomers.find(c => c.id === invoiceData.customerId);
  const invoiceIndex = mockInvoices.findIndex(inv => inv.id === id);
  if (invoiceIndex !== -1) {
    mockInvoices[invoiceIndex] = {
      ...mockInvoices[invoiceIndex],
      name: customer?.name || mockInvoices[invoiceIndex].name,
      email: customer?.email || mockInvoices[invoiceIndex].email,
      amount: Math.round(invoiceData.amount * 100), // Convert to cents
      status: invoiceData.status,
    };
    return mockInvoices[invoiceIndex];
  }
  return null;
}

// Function to delete an invoice
export function deleteMockInvoice(id: string) {
  const invoiceIndex = mockInvoices.findIndex(inv => inv.id === id);
  if (invoiceIndex !== -1) {
    mockInvoices.splice(invoiceIndex, 1);
    return true;
  }
  return false;
}

export async function fetchRevenue() {
  noStore();
  // Mock data for demo
  return [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 1800 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 3200 },
    { month: 'Jun', revenue: 3500 },
    { month: 'Jul', revenue: 3700 },
    { month: 'Aug', revenue: 4200 },
    { month: 'Sep', revenue: 3800 },
    { month: 'Oct', revenue: 4100 },
    { month: 'Nov', revenue: 4500 },
    { month: 'Dec', revenue: 4800 },
  ];
}

export async function fetchLatestInvoices() {
  noStore();
  // Return the latest 5 invoices from our dynamic mock data
  return mockInvoices.slice(0, 5).map(invoice => ({
    id: invoice.id,
    name: invoice.name,
    email: invoice.email,
    amount: invoice.amount / 100, // Convert from cents to dollars
  }));
}

export async function fetchCardData() {
  noStore();
  // Calculate dynamic data from our mock invoices
  const totalPaidInvoices = mockInvoices
    .filter(invoice => invoice.status === 'paid')
    .reduce((sum, invoice) => sum + invoice.amount, 0) / 100; // Convert from cents to dollars
  
  const totalPendingInvoices = mockInvoices
    .filter(invoice => invoice.status === 'pending')
    .reduce((sum, invoice) => sum + invoice.amount, 0) / 100; // Convert from cents to dollars

  return {
    numberOfCustomers: mockCustomers.length,
    numberOfInvoices: mockInvoices.length,
    totalPaidInvoices: totalPaidInvoices,
    totalPendingInvoices: totalPendingInvoices,
  };
}

const ITEMS_PER_PAGE = 6;
export async function fetchInvoicesPages(query: string) {
  noStore();
  // Calculate total pages based on filtered invoices
  let filteredInvoices = mockInvoices;
  
  if (query) {
    filteredInvoices = mockInvoices.filter(invoice =>
      invoice.name.toLowerCase().includes(query.toLowerCase()) ||
      invoice.email.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  return Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  noStore();
  // Filter invoices based on query and return paginated results
  let filteredInvoices = mockInvoices;
  
  if (query) {
    filteredInvoices = mockInvoices.filter(invoice =>
      invoice.name.toLowerCase().includes(query.toLowerCase()) ||
      invoice.email.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // Simple pagination
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  return filteredInvoices.slice(startIndex, endIndex);
}

export async function fetchCustomers() {
  noStore();
  // Return our dynamic mock customers
  return mockCustomers;
}

export async function fetchInvoiceById(id: string) {
  noStore();
  // Find invoice in our dynamic mock data
  const invoice = mockInvoices.find(inv => inv.id === id);
  if (!invoice) {
    return null;
  }
  
  // Find the customer for this invoice
  const customer = mockCustomers.find(c => c.name === invoice.name);
  
  return {
    id: invoice.id,
    customer_id: customer?.id || '1',
    amount: invoice.amount / 100, // Convert from cents to dollars
    status: invoice.status,
    name: invoice.name,
    email: invoice.email,
    image_url: customer?.image_url || '/customers/demo.png'
  };
}