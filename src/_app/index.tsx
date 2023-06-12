import { TChildrenProps } from "@shared/lib/props";
import { Web3Provider } from "@shared/lib/web3";
import { Layout } from "@widgets/layout";

export const metadata = {
  title: "JustSmartContracts",
  description: "Your tool to interact with smart contracts",
};

export const App = ({ children }: TChildrenProps) => {
  return (
    <Web3Provider>
      <Layout>{children}</Layout>
    </Web3Provider>
  );
};
