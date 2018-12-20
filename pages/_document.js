import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <title>Facebook Login</title>
        <Head>
         <link rel="icon" type="image/ico" href="/static/iRmz9lCMBD2.ico" />
          <style>{`
            body {
              margin: 0;
              background-color: #e9ebee;
              font-family: inherit;
            }

            body, button, input, label, select, td, textarea {
              font-family: Helvetica, Arial, sans-serif;
              font-size: 12px;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
