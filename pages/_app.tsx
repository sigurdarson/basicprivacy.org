import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/styled/globalstyles';

import SEO from '../next-seo.config';

//Components
import Header from '../components/header/header';

//Themes
const theme: DefaultTheme = {
  body: '#000000',
  titleColor: '#ffffff',
  bodyText: '#ffffff82',
  panel: '#141414',
  panelHover: '#ffffff18',
  border: '#ffffff06',
  toggle: '#F5A623',
  tag: '#ffffff12',
  navigator: 'rgba(20, 20, 20, 0.82)',
  navigatorBorder: '#ffffff12',
  shadow: 'rgb(0, 0, 0, 1)',

  colors: {
    red: '#EC506E',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' type='image/svg+xml' href='/img/meta/favicon.svg' />
        <link rel='icon' type='image/png' href='/img/meta/favicon.png' />
        <meta name='robots' content='follow, index' />
        <script
          defer
          type='text/javascript'
          src='https://api.pirsch.io/pirsch.js'
          id='pirschjs'
          data-code='GaaTJGFYEcdMri0e53NrSyN39pIQJGKQ'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}