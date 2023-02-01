import type { AppProps } from 'next/app'
import Header from '@/components/layout/header'
import '@/styles/globals.scss'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme/theme'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathname = router.pathname
  
  return (
    <ThemeProvider theme={theme}>
      {pathname !== '/backstage/login' && <Header />}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
