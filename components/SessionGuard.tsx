import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const PUBLIC_PATHS = ['/login', '/'];

export default function SessionGuard({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (status === "unauthenticated" && !PUBLIC_PATHS.some(p => pathname.startsWith(p))) {
            router.replace(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
        }
    }, [status, pathname, router]);

    return (
        <>
            {children}
        </>
    )

}