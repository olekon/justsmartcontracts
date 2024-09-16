import { useCallback, useMemo } from "react";
import { TChainId } from "@shared/lib/web3";
import urlJoin from "url-join";
import { useChainListSafe } from "./useChainList";

export const useChainConfig = (chain: TChainId) => {
  const list = useChainListSafe();

  const config = useMemo(
    () => list.find((item) => item.chainId === chain),
    [chain, list]
  );

  if (!config) {
    throw new Error(`Unsuported chain ${chain}`);
  }

  return config;
};

export const useChainExplorer = (chain: TChainId) => {
  const config = useChainConfig(chain);

  const url = config.explorers[0].url;

  const getTxUrl = useCallback(
    (txHash: string) => {
      return url ? urlJoin(url, `tx/${txHash}`) : "";
    },
    [url]
  );

  const getAddressUrl = useCallback(
    (address: string) => {
      return url ? urlJoin(url, `address/${address}`) : "";
    },
    [url]
  );

  return {
    getTxUrl,
    getAddressUrl,
  };
};
