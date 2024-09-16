import { useMemo } from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { AlchemyKey } from "@shared/lib/env";
import { TWithChildren } from "@shared/lib//props";
import { useChainConfig } from "../model";
import { useWagmiChain } from "../model/useWagmiChain";
import { TChainId } from "@shared/lib/web3";

type TProps = TWithChildren & {
  chain: TChainId;
};

export const Web3Provider = ({ chain, children }: TProps) => {
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
