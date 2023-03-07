import Head from "next/head"
import { ReactNode } from "react"
import Footer from "@/components/layout/footer"
import styles from './style.module.scss'

interface Props {
  pageTitle: string
  children: ReactNode
}

const Container = ({ pageTitle, children }: Props) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <div className={styles['container-root']}>
        <div className={styles['main']}>
          {children}
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Container