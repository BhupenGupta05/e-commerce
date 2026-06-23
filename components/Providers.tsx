'use client';

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from "@/lib/query-client";

export default function Providers({ children }: { children: ReactNode }) {

    // Returns the correct instance for server or client
    const queryClient = getQueryClient();

    return (
        <SessionProvider
            refetchInterval={5 * 60}
            refetchOnWindowFocus={true}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </SessionProvider>

    )

}