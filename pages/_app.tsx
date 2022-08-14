import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const App = ({ Component, pageProps }: AppProps) => {
  const Navigation = dynamic(() => import('../components/Navigation/Navigation'));
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default App