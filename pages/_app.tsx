import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation/Navigation';
import { ArticlesProvider } from '../context/ArticlesContext';
import useLocalStorage from 'use-local-storage'
import { useEffect } from 'react';
const App = ({ Component, pageProps }: AppProps) => {
  // Handle dark theme

  return (
    <>
      <Navigation />
      <ArticlesProvider>
        <Component {...pageProps} />
      </ArticlesProvider>
    </>
  )
}

export default App