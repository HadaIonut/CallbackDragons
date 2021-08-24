import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import initStore from "../store/store";
import NavbarComponent from "../Components/NavbarComponent";
import FooterComponent from "../Components/FooterComponent";
export default function MyApp(props) {
  const { Component, pageProps } = props;
    const {store, persistor} = initStore();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavbarComponent/>
                    <Component {...pageProps} />
                    <FooterComponent/>
                </PersistGate>
            </Provider>
        </ThemeProvider>
      </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
