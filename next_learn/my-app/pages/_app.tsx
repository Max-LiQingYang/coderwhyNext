import Link from "next/link";
import "../styles/globals.css";
import "../styles/main.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

/**
 * 1. 自定义布局 layout
 * 2. Redux
 * 3. Theme
 * 4. 全局样式
 */

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log(Component.displayName);

  const router = useRouter();

  function goToFindPage() {
    router.push({
      pathname: "/find",
      query: {
        id: 1000,
      },
    });
  }

  useEffect(() => {
    const handleRouterChange = (url: string) => {
      console.log("url", url);
    };
    router.events.on("routeChangeStart", handleRouterChange);

    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
  });

  return (
    <div>
      <Link href={"/category"}>
        <button>category</button>
      </Link>
      <Link href={{ pathname: "/profile", query: { test: "test" } }}>
        <button>profile</button>
      </Link>
      <Link href={"https://www.baidu.com"}>baidu</Link>
      <button onClick={goToFindPage}>find</button>
      <Component {...pageProps} />
    </div>
  );
}
