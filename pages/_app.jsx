import "../styles/globals.css";
import "../styles/client.css";
import Head from "next/head";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createCache';
import PropTypes from 'prop-types';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "../utils/themeContext";
import Navbar from "../components/Navbar";
import "swiper/swiper-bundle.css";
import { Toaster } from "react-hot-toast";
import 'regenerator-runtime/runtime';
import Footer from "../components/Footer";
function MyApp(props) {
  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <Head>
        <title>Rightson</title>
        <meta name="description" content="Rightson Tole " />
        <meta name="keywords" content="Rightson Tole" />
        <meta name="author" content="Rightson Tole" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta property="og:url" content="https://transit-daily.vercel.app/logo.png" /> */}
        <meta property="og:image" content=" https://transit-daily.vercel.app/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <div className="w-[100vw] overflow-x-hidden">
            <div className="w-screen overflow-x-hidden">
              <Navbar homepage={Component.homepage} />
              <Component {...pageProps} />
              <Toaster />

              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </>
  );

}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
