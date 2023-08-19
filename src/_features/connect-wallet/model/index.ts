import { useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

export const useConnectWallet = () => {
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return connect;
};
