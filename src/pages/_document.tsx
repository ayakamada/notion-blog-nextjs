import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/atom-one-dark.min.css"
        />
        <script
          src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"
          async={false}
          defer={false}
        ></script>
        <script>hljs.initHighlightingOnLoad();</script>
      </Head>
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
