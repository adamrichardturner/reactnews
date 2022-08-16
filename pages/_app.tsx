import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation/Navigation';
import { ArticlesProvider } from '../context/ArticlesContext';

const App = ({ Component, pageProps }: AppProps) => {
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