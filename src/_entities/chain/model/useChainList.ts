import useSWRImmutable from "swr/immutable";
import { TChain } from "./types";
import DefaultChainsRaw from "./defaultChains.json";

const Endpoint = "https://chainid.network/chains.json";

const rawToTChain = (item: any): TChain => {
  return {
    chain: item.chain,
    chainId: item.chainId,
    explorers: item.explorers,
    name: item.name,
    rpc: item.rpc,
    nativeCurrency: item.nativeCurrency,
  };
};

const DefaultChains = DefaultChainsRaw.map(rawToTChain);

const fetcher = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint);
    const data = (await response.json()) as any[];

    return data
      .filter(
        (item) =>
          item.rpc &&
          item.rpc.length > 0 &&
          item.explorers &&
          item.explorers.length > 1
      )
      .map(rawToTChain);
  } catch (e) {
    console.log(e);
    return DefaultChains;
  }
};

type TChainListContext =
  | {
      loading: true;
      chains: null;
    }
  | {
      loading: false;
      chains: TChain[];
    };

export const useChainList = (): TChainListContext => {
  const response = useSWRImmutable(Endpoint, fetcher);

  if (response.isLoading) {
    return {
      loading: true,
      chains: null,
    };
  }

  if (!response.data) {
    return { loading: false, chains: DefaultChains };
  }

  return { loading: false, chains: response.data };
};

export const useChainListSafe = () => {
  const response = useChainList();

  if (!response.chains) {
    throw new Error("Unexpected missing chains");
  }

  return response.chains;
};
