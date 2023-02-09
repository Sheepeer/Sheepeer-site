import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"
import { NextApiRequest } from 'next'

export async function checkAuth(req: NextApiRequest) {
  //获取token
  const session = await getToken({
    req,
    secret: process.env.SECRET,
    secureCookie:
      process.env.NEXTAUTH_URL?.startsWith("https://") ??
      !!process.env.VERCEL_URL,
  })
  console.log('session in mw:',session)
  //未授权，跳转到登录页面
  if (!session) {
    return NextResponse.redirect("/user/login")
  } else {
    NextResponse.next()
  }
}
