export enum Chain {
  ETHEREUM = 1,
  ETH_GOERLI = 5,
  OPTIMISM = 10,
  BSC = 56,
  POLYGON = 137,
  ZKSYNC = 324,
  ARBITRUM = 42161,
  AVALANCHE = 43114,
  ETH_SEPOLIA = 11155111,
}

type TChainConfig = {
  name: string;
  explorer: string;
  testnet?: boolean;
};

const ChainConfig: Record<Chain, TChainConfig> = {
  [Chain.ETHEREUM]: {
    name: "Ethereum",
    explorer: "https://etherscan.io/",
  },

  [Chain.OPTIMISM]: {
    name: "Optimism",
    explorer: "https://optimistic.etherscan.io/",
  },
  [Chain.POLYGON]: {
    name: "Polygon",
    explorer: "https://polygonscan.com/",
  },
  [Chain.BSC]: {
    name: "BSC",
    explorer: "https://bscscan.com/",
  },
  [Chain.AVALANCHE]: {
    name: "Avalanche",
    explorer: "https://snowtrace.io/",
  },
  [Chain.ZKSYNC]: {
    name: "zkSync Era",
    explorer: "https://explorer.zksync.io/",
  },

  [Chain.ARBITRUM]: {
    name: "Arbitrum",
    explorer: "https://arbiscan.io/",
  },
  [Chain.ETH_GOERLI]: {
    name: "Goerli",
    explorer: "https://goerli.etherscan.io/",
    testnet: true,
  },
  [Chain.ETH_SEPOLIA]: {
    name: "Sepolia",
    explorer: "https://sepolia.etherscan.io/",
    testnet: true,
  },
};

export const getChainConfig = (chain: Chain) => {
  return ChainConfig[chain];
};

export const getTxUrl = (chain: Chain, txHash: string) => {
  return `${ChainConfig[chain].explorer}tx/${txHash}`;
};

export const getAddressUrl = (chain: Chain, address: string) => {
  return ChainConfig[chain].explorer
    ? `${ChainConfig[chain].explorer}address/${address}`
    : "";
};
