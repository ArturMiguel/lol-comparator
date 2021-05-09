import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content='Attribute comparator for League of Legends' />
          <meta name='keywords' content='lol, champion, comparator' />
          <meta name='author' content='https://github.com/ArturMiguel' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument