import HyButton from "@/compontns/hy-button";
import Head from "next/head";
import style from "./index.module.scss";
import { useEffect, useRef } from "react";

// 首页
function Home() {
  // 判断当前运行的环境
  if (typeof window === 'object') {
    console.log('client');
  } else {
    console.log('server');
    console.log(
      'test',
      process.env.NAME,
      process.env.PORT,
      process.env.HOSTNAME
    )
  }

  const workerRef = useRef<Worker>();
  useEffect(() => {

    window.onmessage = (msg) => {
      console.log(msg)
      if (msg.origin == 'http://localhost:8081') {

        console.warn('onmessage', msg.data);
      }
    }
  });

  return (
    <>
      <Head>
        <title>title</title>
        <meta name="description" content="网易云音乐商城"></meta>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
      <div className={style["local-style"]}>Hello Word { process.env.NEXT_PUBLIC_HOSTNAME }</div>
      <div className='global-style2'>test text</div>
      <HyButton />
    </>
  );
}

Home.getInitialProps = function({ Component, ctx }) {
  console.log('init');

  return {};
}

export default Home;
