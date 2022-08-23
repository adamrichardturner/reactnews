import type { NextPage } from 'next'
import Head from 'next/head'
import NewsGrid from '../components/NewsGrid/NewsGrid'

const UK: NextPage = ({articles}) => {
  return (
    <div>
      <Head>
        <title>ReactNews | UK News and Headlines</title>
        <meta name="description" content="Featuring news from multiple UK sources." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="ReactNews | UK News and Headlines" />
        <meta
          property="og:description"
          content="ReactNews features articles from over 60,000 global vendors."
        />
        <meta
          property="og:image"
          content="/reactsocial.jpg"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>

      <main>
        <NewsGrid articles={articles} />
      </main>
    </div>
  )
};

export const getServerSideProps = async () => { 
  const endpoint='top-headlines', topic='breaking-news', country='gb'
  const baseUrl = 'https://gnews.io/api/v4/';
  const key = process.env.GNEWS_API_KEY;
  const res = await fetch(`${baseUrl}${endpoint}?token=${key}&lang=en&topic=${topic}&country=${country}`);
  const articles = await res.json();
  return {
    props: {articles}
  };
};

export default UK;