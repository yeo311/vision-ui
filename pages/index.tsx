import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Vision UI</title>
        <meta name="description" content="Vision UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/face/face-detection">
        <a>나의 얼굴 나이 측정</a>
      </Link>
    </div>
  );
}
