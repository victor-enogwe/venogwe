import { HtmlContext } from 'next/dist/shared/lib/utils';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BODY_RENDER_TARGET } from 'next/dist/shared/lib/constants';
import Document, { Html, Head, NextScript } from 'next/document';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';

export const Main: any = (): any => {
  const { inAmpMode, docComponentsRendered } = useContext(HtmlContext);

  docComponentsRendered.Main = true;

  if (inAmpMode) return <div className="container">{BODY_RENDER_TARGET}</div>;
  return <Container id="__next">{BODY_RENDER_TARGET}</Container>;
};

class MyDocument extends Document {
  render() {
    // eslint-disable-next-line no-underscore-dangle
    const { locale } = this.props.__NEXT_DATA__.props.pageProps;

    return (
      <Html lang={locale}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#030303" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider dir={process.env.NEXT_PUBLIC_THEME_DIRECTION}>
          <Main />
        </ThemeProvider>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
