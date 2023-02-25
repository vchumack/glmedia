import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uk">
      <Head />
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C73728S2WE"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-C73728S2WE');
      </script>
      <body id="main">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
