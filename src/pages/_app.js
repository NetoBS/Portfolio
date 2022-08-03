import '../../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>will | dev</title>
        </Head>
        <Header />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
