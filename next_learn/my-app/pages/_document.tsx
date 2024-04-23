import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script type="text/javascript" dangerouslySetInnerHTML={{
							__html: `
									console.log('script')
                                `,
						}}>
					</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
