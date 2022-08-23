import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NewsGrid from '../components/NewsGrid/NewsGrid'

const UK: NextPage = ({articles}) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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