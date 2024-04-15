import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from  'bcryptjs'
import github from "next-auth/providers/github";

const prisma = new PrismaClient();

export const { handlers:{GET, POST }, auth, signIn, signOut } = NextAuth({
        // Connects to Prisma 
        adapter:PrismaAdapter(prisma),

        // Array of providers 
        providers:[
            // User creates login info
            CredentialsProvider({
                name: 'credentials', 
                credentials: {
                    email: { label: 'Email', type: 'email', placeholder: 'Email' },
                    password: { label: 'Password', type: 'password', placeholder: 'Password' }
                },
                async authorize(credentials, req) {
                    if (!credentials?.email || !credentials.password ) 
                        return null
                    const user = await prisma.user.findUnique({
                        where: { 
                            email: credentials.email as string 
                        }})
                    if(!user) 
                        return null
                    const macthedPasswords = await bcrypt.compare(
                        credentials.password as string, 
                        user.hashPassword!
                        )
                    return macthedPasswords ? user : null;
                    
                }
            }),
            // Uses Google to signin/register 
            GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }),
            //GitHub Auth
            github({
                clientId: process.env.AUTH_GITHUB_ID,
                clientSecret: process.env.AUTH_GITHUB_SECRET
            })

        ],
        callbacks:{
            authorized({request, auth}){
                const { pathname } = request.nextUrl
                if (
                    pathname.startsWith('/users') ||
                    pathname.startsWith('/products') ||
                    pathname.startsWith('/reset-password')
                    )
                return !!auth; 
            return true
            }
        },
        session: {
            strategy: 'jwt'
        }
    })
