import Head from 'next/head';
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import { AuthContextProvider } from '../stores/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Head>
          <title>NextJS with Bootstrap </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}
export default MyApp