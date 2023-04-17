import type { AppProps } from 'next/app'
import Header from '@/components/layout/header'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme/theme'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import '@/styles/globals.scss'
import HeaderContextProvider from 'src/context/headerContent'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {

  const router = useRouter()
  const pathname = router.pathname

  return (
    <SWRConfig value={{
      revalidateIfStale: false
    }}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          {/* {(
            pathname !== '/backstage/login' &&
            pathname !== '/gallery'
          ) && <Header style={{ position: 'sticky', top: 0 }} />}
          <Component {...pageProps} /> */}

          <HeaderContextProvider>
            {(
              pathname !== '/backstage/login' &&
              pathname !== '/gallery'
            ) && <Header style={{ position: 'sticky', top: 0 }} />}
            <Component {...pageProps} />
          </HeaderContextProvider>
        </ThemeProvider>
      </SessionProvider>
    </SWRConfig>
  )
}

export default MyApp
