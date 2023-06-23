import { TWithChildren } from "@shared/lib/props";
import { Web3Provider } from "@shared/lib/web3";
import { Layout } from "@widgets/layout";
import { chainModel } from "@entities/chain";

export const metadata = {
  title: "JustSmartContracts",
  description: "Your tool to interact with smart contracts",
};

export const App = ({ children }: TWithChildren) => {
  return (
    <Web3Provider chains={chainModel.SupportedChains}>
      <Layout>{children}</Layout>
    </Web3Provider>
  );
};
