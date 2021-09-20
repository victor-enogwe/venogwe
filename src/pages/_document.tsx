import Document, { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    // eslint-disable-next-line no-underscore-dangle
    const { locale } = this.props.__NEXT_DATA__.props.pageProps;

    return (
      <Html lang={locale}>
        <Head>
          <link rel="manifest" href="/manifest.json" key="manifest" />
          <link
            rel="apple-touch-icon"
            href="/icon.png"
            key="apple-touch-icon"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Playfair+Display&display=swap"
            rel="stylesheet"
            key="fonts"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
