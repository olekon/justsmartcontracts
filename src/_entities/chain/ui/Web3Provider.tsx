import { useMemo } from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { AlchemyKey } from "@shared/lib/env";
import { TWithChildren } from "@shared/lib//props";
import { useChainConfig, useCurrentChain } from "../model";
import { useWagmiChain } from "../model/useWagmiChain";

type TProps = TWithChildren & {};

export const Web3Provider = ({ children }: TProps) => {
  const { chain } = useCurrentChain();
  const chainConfig = useChainConfig(chain);

  const wagmiChain = useWagmiChain(chainConfig);

  const wagmiConfig = useMemo(() => {
    const { publicClient } = configureChains(
      [wagmiChain],
      [alchemyProvider({ apiKey: AlchemyKey }), publicProvider()]
    );

    return createConfig({ publicClient });
  }, [wagmiChain]);

  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
};
