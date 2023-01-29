import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MuiThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';
import { darkTheme, lightTheme } from '../src/theme';

export default function MyApp({ Component, pageProps }) {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useState(
    prefersDarkMode ? darkTheme : lightTheme
  )

  useEffect(() => {
    setTheme(prefersDarkMode ? darkTheme : lightTheme)
  }, [prefersDarkMode])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Siddhant Shah</title>
        <meta name="viewport" content="minimum-scale=1,initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="google-site-verification" content="UnIJZPVWbBBbWudWN6mqjZodk0U3eLM4sX7r5z5w5v8" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} setTheme={setTheme}/>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
