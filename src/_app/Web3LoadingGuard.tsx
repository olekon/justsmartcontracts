import { chainModel, Web3Provider } from "@entities/chain/";
import { TWithChildren } from "@shared/lib//props";
import { LoadingScreen } from "@widgets/loading-screen";

export const Web3LoadingGuard = ({ children }: TWithChildren) => {
  const { loading } = chainModel.useChainList();

  if (loading) {
    return <LoadingScreen />;
  }

  return <Web3Provider>{children}</Web3Provider>;
};
