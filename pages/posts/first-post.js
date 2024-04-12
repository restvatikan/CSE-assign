import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Hi worlddddd</h1>
      <h2>
        <Link href="/">want to go back?</Link>
      </h2>
    </Layout>
  );
}