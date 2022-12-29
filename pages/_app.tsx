import "styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "layout";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default RootApp;
