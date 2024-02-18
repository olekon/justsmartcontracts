import useSWRImmutable from "swr/immutable";
import { TChain } from "./types";

import DefaultChainsRaw from "./defaultChains.json";
import { useCurrentChain } from "./useCurrentChain";
import { useMemo } from "react";
import { TChainId } from "@shared/lib/web3";

const Endpoint = "https://chainid.network/chains.json";

const mapper = (item: any): TChain => {
  return {
    chain: item.chain,
    chainId: item.chainId,
    explorers: item.explorers,
    name: item.name,
    rpc: item.rpc,
    nativeCurrency: item.nativeCurrency,
  };
};

const DefaultChains = DefaultChainsRaw.map(mapper);

const fetcher = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint);
    const data = (await response.json()) as any[];

    return data.map(mapper);
  } catch (e) {
    console.log(e);
    return DefaultChains;
  }
};

export const useChainList = () => {
  const response = useSWRImmutable(Endpoint, fetcher);

  if (response.isLoading || !response.data) {
    return DefaultChains;
  }

  return response.data;
};

export const useChainConfig = (chain: TChainId) => {
  const list = useChainList();

  const config = useMemo(
    () => list.find((item) => item.chainId === chain),
    [chain, list]
  );

  if (!config) {
    throw new Error(`Unsuported chain ${chain}`);
  }

  return config;
};
