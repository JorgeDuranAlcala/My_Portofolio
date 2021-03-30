import "../styles/globals.css";
import { ContextProvider } from "../context";
import { StylesProvider } from "@material-ui/core";
import { GlobalStyles } from "../components/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
