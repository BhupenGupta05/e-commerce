import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


const ANONYMOUS_ALLOWED = ["/discover"];
const PUBLIC = ["/", "/login"];

export async function middleware(req: NextRequest) {
    console.log("MIDDLEWARE HIT:", req.nextUrl.pathname); // add this
    const { pathname } = req.nextUrl;

    // Always allow public routes
    if(PUBLIC.some(p => pathname === p)) return NextResponse.next();

    // Always allow anonymous-accessible routes (no token check needed)
    if(ANONYMOUS_ALLOWED.some(p => pathname.startsWith(p))) {
        return NextResponse.next();
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if(!token) {
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