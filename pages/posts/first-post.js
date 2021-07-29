// Link 쓰면 client side navigation으로 동작함 -> 페이지 전체가 다 refresh 되는 게
// 아니라 필요한 부분만. 만약 <a href> 쓰면 페이지 전체가 다 바뀜
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title> First post</title> {/** 브라우저 탭 이름 */}
    </Head>
    <h1> First post </h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  )
}

/*
  const YourComponent = () => {
    <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt='Your name'
    />
  }
*/