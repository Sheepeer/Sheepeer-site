import type { AppProps } from 'next/app'
import Header from '@/components/layout/header'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme/theme'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import '@/styles/globals.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {

  const router = useRouter()
  const pathname = router.pathname

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        {(
          pathname !== '/backstage/login' &&
          pathname !== '/gallery'
        ) && <Header style={{position: 'sticky', top: 0}} />}
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
