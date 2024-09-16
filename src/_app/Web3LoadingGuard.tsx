import { chainModel, Web3Provider } from "@entities/chain/";
import { TWithChildren } from "@shared/lib//props";
import { LoadingScreen } from "@widgets/loading-screen";
import { useEffect, useMemo } from "react";

const DefaultChain = 1; //eth

const Web3ChainGuard = ({ children }: TWithChildren) => {
  const chains = chainModel.useChainListSafe();
  const { chain, update } = chainModel.useCurrentChain();

  const isValidChain = useMemo(
    () => chains.find((item) => item.chainId === chain),
    [chain, chains]
  );

  useEffect(() => {
    if (!isValidChain) {
      console.log(`Switch to default chain, ${chain} is not in list`);
      update(DefaultChain);
    }
  }, [chain, isValidChain, update]);

  const resultingChain = isValidChain ? chain : DefaultChain;

  return <Web3Provider chain={resultingChain}>{children}</Web3Provider>;
};

export const Web3LoadingGuard = ({ children }: TWithChildren) => {
  const { loading } = chainModel.useChainList();

  if (loading) {
    return <LoadingScreen />;
  }

  return <Web3ChainGuard>{children}</Web3ChainGuard>;
};
