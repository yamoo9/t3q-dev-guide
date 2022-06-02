import Head from 'next/head';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';

interface HomePageProps {
  keyAndId: {
    key: string;
    id: string;
  };
}

// export function getServerSideProps(context: GetServerSidePropsContext) {
export function getStaticProps(context: GetStaticPropsContext) {
  const { API_KEY, APP_ID } = process.env;

  const keyAndId = {
    key: API_KEY,
    id: APP_ID,
  };

  return {
    props: {
      keyAndId,
    },
  };
}

export default function HomePage({ keyAndId }: HomePageProps) {
  // console.log(process.env.NEXT_PUBLIC_API_KEY);
  // console.log(process.env.NEXT_PUBLIC_APP_ID);

  return (
    <div id="home">
      <Head>
        <title>Next.js 스캐폴딩 러닝 가이드</title>
        <meta
          name="description"
          content="Next.js를 사용해 React 애플리케이션 개발 환경을 구성합니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://guide.t3q.com/" />
        <meta
          property="og:title"
          content="Next.js 개발 환경 직접 구성해보자!"
        />
        <meta
          property="twitter:title"
          content="Next.js 개발 환경 직접 구성해보자!"
        />
        <meta
          property="og:description"
          content="React 애플리케이션 개발 Next.js로 시작하는 방법을 직접 구성해봅니다. Next.js는 SSR, SSG, ISR 등 다양한 방식의 렌더링을 지원합니다."
        />
        <meta property="og:image" content="http://guide.t3q.com/cover.jpg" />
      </Head>

      <h1>T3Q 개발 환경 구성 가이드</h1>
    </div>
  );
}
