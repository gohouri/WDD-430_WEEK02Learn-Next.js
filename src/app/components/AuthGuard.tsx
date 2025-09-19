'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated (simple check for demo)
    // In a real app, you'd check a session cookie or token
    const checkAuth = () => {
      // Check both localStorage and cookies for authentication
      const localStorageAuth = localStorage.getItem('isAuthenticated');
      const cookieAuth = document.cookie.includes('isAuthenticated=true');
      
      if (localStorageAuth === 'true' || cookieAuth) {
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Redirecting to login...</div>;
  }

  return <>{children}</>;
}
