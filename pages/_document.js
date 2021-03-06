import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" src="../style/home.css"/>
            <link rel="stylesheet" src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
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