import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div id="errorPage">
      <h1>페이지를 찾을 수 없습니다.</h1>
      <Link href="/">홈 페이지</Link>로 이동
    </div>
  );
}
