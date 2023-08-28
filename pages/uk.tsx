import type { NextPage } from 'next'
import Head from 'next/head'
import NewsGrid from '../components/NewsGrid/NewsGrid'
import { IArticlesProps } from '../types/IArticlesProps'

const UK: NextPage<IArticlesProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>React News | UK News and Headlines</title>
        <meta
          name='description'
          content='React News features international articles from over 60,000 global vendors.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta property='og:title' content='ReactNews | UK' />
        <meta
          property='og:description'
          content='React News features international articles from over 60,000 global vendors.'
        />
        <meta
          property='og:image'
          content='https://reactnews.app/reactnews-social.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@csturner88' />
        <meta name='twitter:creator' content='@csturner88' />
        <meta name='twitter:title' content='React News | UK' />
        <meta
          name='twitter:description'
          content='React News features international articles from over 60,000 global vendors.'
        />
        <meta
          name='twitter:image'
          content='https://reactnews.app/reactnews-social.png'
        />
      </Head>

      <NewsGrid articles={articles} />
    </>
  )
}

export const getServerSideProps = async () => {
  const endpoint = 'top-headlines',
    topic = 'breaking-news',
    country = 'gb'
  const baseUrl = 'https://gnews.io/api/v4/'
  const key = process.env.GNEWS_API_KEY
  const res = await fetch(
    `${baseUrl}${endpoint}?token=${key}&lang=en&topic=${topic}&country=${country}`
  )
  const articles = await res.json()
  return {
    props: { articles },
  }
}

export default UK
