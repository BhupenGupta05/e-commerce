import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


const ANONYMOUS_ALLOWED = ["/discover"];
const PUBLIC = ["/", "/login"];

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Always allow public routes
    if(PUBLIC.some(p => pathname === p)) return NextResponse.next();

    // Always allow anonymous-accessible routes (no token check needed)
    if(ANONYMOUS_ALLOWED.some(p => pathname.startsWith(p))) return NextResponse.next();

    const sessionCheckUrl = new URL("/api/auth/session-check", req.nextUrl.origin);

    const sessionRes = await fetch(sessionCheckUrl.toString(), {
        headers: {
            cookie: req.headers.get("cookie") ?? "",
        }
    })

    const { authenticated } = await sessionRes.json();

    if(!authenticated) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("callback", pathname);
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};