import Head from "next/head"
import { ReactNode } from "react"
import Footer from "../footer"
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
        <div>
          {children}
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Container