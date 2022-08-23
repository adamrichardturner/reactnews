import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReactNews | Worldwide and UK based News from thousands of sources</title>
        <meta name="description" content="ReactNews features news generated from over 60,000 sources." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="ReactNews | Worldwide and UK based News from thousands of sources." />
        <meta
          property="og:description"
          content="ReactNews features articles from over 60,000 global vendors."
        />
        <meta
          property="og:image"
          content="/reactsocial.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@csturner88" />
        <meta name="twitter:creator" content="@csturner88" />
        <meta name="twitter:title" content="ReactNews | Worldwide and UK based News from thousands of sources" />
        <meta name="twitter:description" content="ReactNews features articles from over 60,000 global vendors." />
        <meta name="twitter:image" content="/reactsocial.jpg" />
      </Head>

      <main className={styles.container__main}>
        <section className={styles.container__main__landing}>
          <div className={styles.container__main__landing__headline}>
            <h2 className={styles.container__main__landing__headline__title}>
              All the headlines you need...
            </h2>
          </div>
        </section>
        <section className={styles.container__main__info}>
          <video autoPlay muted loop playsInline>
            <source src="/reactnews.mp4" type="video/mp4"/>
          </video>
          <h2 className={styles.container__main__info__title}>
            Sourced from over 60,000 news outlets...
          </h2>
          <p>ReactNews features headlines and content from sources all over the world.<br />
            Simply click on an individual article to view the full original source.
          </p>
          <Link href="/world">
            <button className={styles.container__main__info__button}>Get Started</button>
          </Link>
        </section>
      </main>
    </div>
  )
}

export default Home
