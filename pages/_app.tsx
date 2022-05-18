import React, { FC, useMemo, ReactNode } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fontsource/space-grotesk/300.css";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { clusterApiUrl } from "@solana/web3.js";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import Layout from "../components/layout";
import { NextPage } from "next";
import WithAuth from "../components/HOC/withAuth";

import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: NextPage) => page);
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  const WalletConnectionProvider = dynamic<{ children: ReactNode }>(
    () =>
      import("../components/WalletConnectionProvider").then(
        ({ WalletConnectionProvider }) => WalletConnectionProvider
      ),
    {
      ssr: false,
    }
  );

  return (
    <WalletConnectionProvider>
      {/* <WalletProvider wallets={wallets}> */}
      <WalletModalProvider>
        <ChakraProvider theme={theme}>
          <WithAuth>
            {/* <Layout> */}
            {getLayout(<Component {...pageProps} />)}
            {/* </Layout> */}
          </WithAuth>
        </ChakraProvider>
      </WalletModalProvider>{" "}
      {/* </WalletProvider> */}
    </WalletConnectionProvider>
  );
}

export default MyApp;
