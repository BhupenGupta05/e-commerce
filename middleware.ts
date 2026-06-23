import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


const ANONYMOUS_ALLOWED = ["/discover"];
const PUBLIC = ["/", "/login"];

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    if(PUBLIC.some(p => pathname === p)) return NextResponse.next();

    if(!token) {
        // Unauthenticated users can visit /discover
        if(ANONYMOUS_ALLOWED.some(p => pathname.startsWith(p))) {
            return NextResponse.next();
        }

        const url = req.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("callback", pathname);
        return NextResponse.next();
    }
    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};