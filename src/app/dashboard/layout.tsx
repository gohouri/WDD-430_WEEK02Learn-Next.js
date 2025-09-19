import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import SideNav from '@/app/ui/dashboard/sidenav';

export default async function Layout({ children }: { children: React.ReactNode }) {
  // Check authentication server-side
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('isAuthenticated')?.value === 'true';
  
  if (!isAuthenticated) {
    redirect('/login');
  }

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
