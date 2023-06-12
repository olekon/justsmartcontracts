import {
  WagmiConfig,
  configureChains,
  createConfig,
  mainnet,
  sepolia,
} from "wagmi";
import { goerli } from "viem/chains";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import { InfuraKey } from "../env";
import { TChildrenProps } from "../props";

export const Web3Provider = ({ children }: TChildrenProps) => {
  const { publicClient } = configureChains(
    [mainnet, goerli, sepolia],
    [infuraProvider({ apiKey: InfuraKey }), publicProvider()]
  );

  const config = createConfig({ publicClient });

  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
