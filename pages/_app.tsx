import React from "react";
import Head from "next/head";

import type { AppProps } from "next/app";

import "@/styles/global.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Pascal Vent</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
