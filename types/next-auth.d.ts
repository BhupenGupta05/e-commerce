import { DefaultSession } from "next-auth";
import { Role } from '@prisma/client'

// Extend session table using declare 
declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession['user']
    }
}