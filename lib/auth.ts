import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from "next-auth";
import prisma from "./prisma";

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: `openid email profile`,
                    access_type: "offline",
                    prompt: "consent",
                }
            }
        }),
    ],
    session: {
        strategy: 'database',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60 //refresh the expiry every 24h of activity
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile }) {
            if(!account) return false;
            // console.log({ user, account, profile });
            
            return true;
        },
        async session({ session, user }) {
            if(session.user) {
                session.user.id = user.id;
            }
            // console.log({ session, user });
            
            return session;
        },
        // Needed on some next-auth versions even with database strategy
  // to avoid a callback invocation error during OAuth flow
        async jwt({ token }) {
            return token;
        }
    },
    pages: {
        signIn: '/login',
        error: '/login',
        signOut: '/login',
    }
}

export default authOptions;