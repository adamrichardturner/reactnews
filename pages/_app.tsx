import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation/Navigation';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default App