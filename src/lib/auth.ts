import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (credentials?.email && credentials?.password) {
                    return {
                        id: "mock_user_1",
                        name: "John Doe",
                        email: credentials.email as string,
                    };
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        async session({ session, token }: any) {
            if (session?.user && token?.sub) {
                session.user.id = token.sub;
            }
            return session;
        },
    }
});
