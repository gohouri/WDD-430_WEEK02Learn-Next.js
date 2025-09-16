export default async function CustomersTable() {
  // Mock data for demo
  const customers = [
    { id: '1', name: 'Delba de Oliveira', email: 'delba@oliveira.com', image_url: '/customers/delba-de-oliveira.png' },
    { id: '2', name: 'Lee Robinson', email: 'lee@robinson.com', image_url: '/customers/lee-robinson.png' },
    { id: '3', name: 'Hector Simpson', email: 'hector@simpson.com', image_url: '/customers/hector-simpson.png' },
    { id: '4', name: 'Steven Tey', email: 'steven@tey.com', image_url: '/customers/steven-tey.png' },
    { id: '5', name: 'Steph Dietz', email: 'steph@dietz.com', image_url: '/customers/steph-dietz.png' },
  ];

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {customers?.map((customer) => (
              <div
                key={customer.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{customer.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{customer.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Invoices
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Pending
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Paid
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {customers?.map((customer) => (
                <tr
                  key={customer.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{customer.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* Placeholder for total invoices */}
                    0
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* Placeholder for total pending */}
                    $0.00
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* Placeholder for total paid */}
                    $0.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
