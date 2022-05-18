import React, { FC, useMemo } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fontsource/space-grotesk/300.css";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

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

function MyApp({ Component, pageProps }: AppProps) {
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

  return (
    <ChakraProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WalletModalProvider>{" "}
        </WalletProvider>
      </ConnectionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
