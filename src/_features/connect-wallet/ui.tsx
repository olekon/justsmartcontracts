import { Button } from "antd";
import { useConnectWallet } from "./model";

export const ConnectButton = () => {
  const connect = useConnectWallet();

  return (
    <Button onClick={() => connect()} size="middle" type="primary">
      Connect wallet
    </Button>
  );
};
