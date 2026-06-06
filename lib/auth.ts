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
    },
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
        }
    },
    pages: {
        signIn: '/login',
        error: '/login',
        signOut: '/login',
    }
}

export default authOptions;