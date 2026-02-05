'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import { ReactNode, useState } from 'react';
import { queryClient } from '@/lib/react-query';

export function Providers({ children }: { children: ReactNode }) {
    // Ensure one QueryClient instance on the client
    const [client] = useState(() => queryClient);

    return (
        <QueryClientProvider client={client}>
            <ThemeProvider attribute="class" defaultTheme="system">
                {children}
                <Toaster position="top-right" />
            </ThemeProvider>
        </QueryClientProvider>
    );
}
