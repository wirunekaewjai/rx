import Head from 'next/head';
import Modal from 'src/components/modal';

function Page ()
{
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="/css/home.css"
        />
      </Head>
      <h1>Hello, World</h1>
      <Modal />
    </div>
  );
}

export default Page;