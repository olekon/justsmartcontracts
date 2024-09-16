import { useMemo } from "react";
import { defineChain } from "viem";
import { TChain } from "./types";
import { getAlchemyUrl } from "../lib/alchemy";

export const useWagmiChain = (chainConfig: TChain) => {
  const defaultRpc = useMemo(() => {
    return (
      chainConfig.rpc.find((item) => !item.includes("${")) ||
      chainConfig.rpc[0] ||
      ""
    );
  }, [chainConfig]);

  const alchemyRpcUrl = getAlchemyUrl(chainConfig.chainId);

  return useMemo(() => {
    return defineChain({
      id: chainConfig.chainId,
      name: chainConfig.name,
      rpcUrls: {
        default: { http: [defaultRpc] },
        public: { http: [defaultRpc] },
        alchemy: { http: [alchemyRpcUrl || ""] },
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
  }, [chainConfig, defaultRpc, alchemyRpcUrl]);
};
