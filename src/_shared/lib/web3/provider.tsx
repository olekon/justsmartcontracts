import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { AlchemyKey } from "../env";
import { TWithChildren } from "../props";
import { Chain } from "./chains";
import { toWagmiChain } from "./wagmi";

type TProps = TWithChildren & {
  chains: Chain[];
};

export const Web3Provider = ({ children, chains }: TProps) => {
  const { publicClient } = configureChains(chains.map(toWagmiChain), [
    alchemyProvider({ apiKey: AlchemyKey }),
    publicProvider(),
  ]);

  const config = createConfig({ publicClient });

  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
