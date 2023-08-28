import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navigation />
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
