import { Html, Head, Main, NextScript } from "next/document";
import { DefaultMetatags } from "@/components/metatags/DefaultMetatags";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <DefaultMetatags />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
