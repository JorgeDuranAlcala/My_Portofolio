import "../styles/globals.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ContextProvider } from "../context";
import { StylesProvider } from "@material-ui/core";
import { GlobalStyles } from "../components/styles/GlobalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jorge Duran</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StylesProvider injectFirst>
        <ContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </ContextProvider>
      </StylesProvider>
    </>
  );
}

export default MyApp;
