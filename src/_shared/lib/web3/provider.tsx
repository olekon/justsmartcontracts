import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { AlchemyKey } from "../env";
import { TWithChildren } from "../props";
import { Chain } from "./chains";
import { toWagmiChain } from "./wagmi";

type TProps = TWithChildren & {
  chain: Chain;
};

export const Web3Provider = ({ children, chain }: TProps) => {
  const { publicClient } = configureChains(
    [toWagmiChain(chain)],
    [alchemyProvider({ apiKey: AlchemyKey }), publicProvider()]
  );

  const config = createConfig({ publicClient });

  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
