import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Web3Provider } from "@shared/lib/web3";
import { Layout } from "@widgets/layout";
import { chainModel } from "@entities/chain";
import { NotificationsProvider } from "@shared/lib/notify";

export const metadata = {
  title: "JustSmartContracts",
  description: "Your tool to interact with smart contracts",
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Web3Provider chains={chainModel.SupportedChains}>
        <NotificationsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </Web3Provider>
    </>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
