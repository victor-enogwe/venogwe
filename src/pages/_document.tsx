import get from 'lodash.get';
import { DocumentContext } from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const {
      cookies: { locale },
    } = get(this.props, `__NEXT_DATA__.props.pageProps`);

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
