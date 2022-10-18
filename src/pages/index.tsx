import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Sheepeer's site`}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {`Sheepeer's Site Here`}
        </h1>

        <Link href={'/blogs'}><button>Blogs</button></Link>
        <Link href={'/gallery'}><button>Gallery</button></Link>
      </main>

      <footer className={styles.footer}>
        all by Sheepeer
      </footer>
    </div>
  )
}

export default Home
