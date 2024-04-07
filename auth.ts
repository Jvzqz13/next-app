import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers:{GET, POST }, auth, signIn, signOut } = NextAuth({
        adapter:PrismaAdapter(prisma),
        providers:[GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
        ],
        callbacks:{
            authorized({request, auth}){
                const { pathname } = request.nextUrl
                if (
                    pathname.startsWith('/users') ||
                    pathname.startsWith('/products')
                    )
                return !!auth; 
            return true
            }
        },
        session: {
            strategy: 'jwt'
        }
    })
