import SideNav from '@/app/ui/dashboard/sidenav';

export default function Page() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="flex h-full flex-col">
          <p className="text-sm text-gray-600">Invoices Page</p>
        </div>
      </div>
    </div>
  );
}
