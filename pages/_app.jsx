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
import ScrollToTop from "react-scroll-to-top";
import dynamic from "next/dynamic";
import "../styles/nprogress.css";
import { AnimatePresence } from "framer-motion";
const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgress");
  },
  { ssr: false },
);

function MyApp(props) {
  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return (
    <>
      <Head>
        <title>Rightson</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <meta name="description" content="Rightson Tole | Kenyan web developer living in Nairobi with expertise in Mongo db, React, Node.js, Next.js, Firebase, WordPress, and PHP" />
        <meta name="keywords" content="Rightson Tole | Kenyan Web Developer |Kenyan Mobile developer | Next js |Firebase " />
        <meta name="author" content="Rightson Tole" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://rightson.vercel.app/logo.png" />
        <meta property="og:image" content=" https://rightson.vercel.app/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <div className="w-[100vw] overflow-x-hidden">
            <div className="w-screen overflow-x-hidden">
              <AnimatePresence>
                <Navbar homepage={Component.homepage} />
                <TopProgressBar />
                <Component {...pageProps} />
                <Toaster />
                <ScrollToTop smooth color={"#00000"} height="15px" className="top" />
                <Footer />
              </AnimatePresence>

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
