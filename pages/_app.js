import '../styles/globals.css'
import { ContextProvider } from "../context";
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <ContextProvider>
          <Header/>
          <Component {...pageProps} />
        </ContextProvider>
      </>
    )
}

export default MyApp
