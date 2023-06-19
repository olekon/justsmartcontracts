import { mainnet, sepolia, Chain as WagmiChain } from "wagmi";
import { arbitrum, goerli } from "viem/chains";

import { Chain } from "./chains";

const ChainWagmiMap: Record<Chain, WagmiChain> = {
  [Chain.ARBITRUM]: arbitrum,
  [Chain.ETHEREUM]: mainnet,
  [Chain.ETH_GOERLI]: goerli,
  [Chain.ETH_SEPOLIA]: sepolia,
};

export const toWagmiChain = (chain: Chain) => ChainWagmiMap[chain];
