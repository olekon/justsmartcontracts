import { TChainId, TAddress } from "@shared/lib/web3";
import { useCallback } from "react";
import { useWalletClient, useAccount } from "wagmi";

type TWalletModel = {
  address: TAddress | null;
};

export const useCurrentWallet = (): TWalletModel => {
  const { address } = useAccount();
  return { address: address || null };
};

export const useSwitchWalletChain = (chain: TChainId) => {
  const { data: walletClient } = useWalletClient();

  const switchIfNeeded = useCallback(async () => {
    if (walletClient) {
      try {
        const walletChain = await walletClient.getChainId();
        if (walletChain !== Number(chain)) {
          await walletClient.switchChain({ id: Number(chain) });
        }
        return true;
      } catch (e) {
        console.log(e);
      }
    }
    return false;
  }, [chain, walletClient]);

  return switchIfNeeded;
};
