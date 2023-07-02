import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import { InfuraKey } from "../env";
import { TWithChildren } from "../props";
import { Chain } from "./chains";
import { toWagmiChain } from "./wagmi";

type TProps = TWithChildren & {
  chains: Chain[];
};

export const Web3Provider = ({ children, chains }: TProps) => {
  const { publicClient } = configureChains(chains.map(toWagmiChain), [
    infuraProvider({ apiKey: InfuraKey }),
    publicProvider(),
  ]);

  const config = createConfig({ publicClient });

  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
