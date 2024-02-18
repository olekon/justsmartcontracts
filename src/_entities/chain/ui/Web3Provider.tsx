import { useMemo } from "react";
import { defineChain } from "viem";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { AlchemyKey } from "@shared/lib/env";
import { TWithChildren } from "@shared/lib//props";
import { useChainConfig, useCurrentChain } from "../model";

type TProps = TWithChildren & {};

export const Web3Provider = ({ children }: TProps) => {
  const { chain } = useCurrentChain();
  const chainConfig = useChainConfig(chain);

  const defaultRpc = useMemo(() => {
    return (
      chainConfig.rpc.find((item) => !item.includes("${")) || chainConfig.rpc[0]
    );
  }, [chainConfig]);

  const wagmiChain = useMemo(() => {
    return defineChain({
      id: chainConfig.chainId,
      name: chainConfig.name,
      rpcUrls: {
        default: { http: [defaultRpc] },
        public: { http: [defaultRpc] },
      },
      blockExplorers: {
        default: {
          name: chainConfig.explorers[0].name,
          url: chainConfig.explorers[0].url,
        },
      },
      nativeCurrency: chainConfig.nativeCurrency,
      network: String(chainConfig.chainId),
    });
  }, [chainConfig, defaultRpc]);

  const wagmiConfig = useMemo(() => {
    const { publicClient } = configureChains(
      [wagmiChain],
      [alchemyProvider({ apiKey: AlchemyKey }), publicProvider()]
    );

    return createConfig({ publicClient });
  }, [wagmiChain]);

  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
};
