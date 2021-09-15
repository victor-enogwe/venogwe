import { HtmlContext } from 'next/dist/shared/lib/utils';
import { BODY_RENDER_TARGET } from 'next/dist/shared/lib/constants';
import Document, { Html, Head, NextScript } from 'next/document';
import { useContext } from 'react';

export function Main() {
  const { inAmpMode, docComponentsRendered } = useContext(HtmlContext);

  docComponentsRendered.Main = true;

  if (inAmpMode) return <div className="container">{BODY_RENDER_TARGET}</div>;
  return (
    <div id="__next" className="container">
      {BODY_RENDER_TARGET}
    </div>
  );
}

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
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
