import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const user = await prisma.adminUser.findUnique({
                    where: { username: credentials.username },
                });

                if (!user) {
                    return null;
                }

                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.passwordHash
                );

                if (!isValid) {
                    return null;
                }

                return { id: user.id, name: user.username };
            },
        }),
    ],
    pages: {
        signIn: "/admin/login",
    },
    callbacks: {
        async session({ session, token }) {
            if (session?.user) {
                session.user.name = token.name;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.name = user.name;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET || "secret", // Use env var in production
});

export { handler as GET, handler as POST };
