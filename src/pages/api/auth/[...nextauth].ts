import NextAuth from "next-auth/next"
import GithubProvider from 'next-auth/providers/github'

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      console.log(token, account)
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }: any) {
      console.log(session, token, user)
      session.accessToken = token.access_token
      return session
    }
  }
}

export default NextAuth(authOptions)

export {
  authOptions
}