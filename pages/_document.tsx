import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Lexend Deca' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument