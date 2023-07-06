import { TAddress } from "@shared/lib/web3";
import { useAccount } from "wagmi";

type TWalletModel = {
  address: TAddress | null;
};

export const useCurrentWallet = (): TWalletModel => {
  const { address } = useAccount();

  return { address: address || null };
};
