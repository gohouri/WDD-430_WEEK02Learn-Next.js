import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const authOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          // Simple authentication for demo purposes
          if (email === 'admin@nextjs.com' && password === 'password123') {
            return {
              id: '1',
              name: 'Admin User',
              email: 'admin@nextjs.com',
            };
          }
        }
        return null;
      },
    }),
  ],
};

export const { auth, signIn, signOut } = NextAuth(authOptions);