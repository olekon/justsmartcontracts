import { Routes } from "@shared/config/routes";
import { Navigation } from "./Navigation";
import { SetCurrentChain } from "@features/set-current-chain";
import { WalletCard, walletModel } from "@entities/wallet";
import { ConnectButton } from "@features/connect-wallet";

import styles from "./Header.module.scss";

const WalletBlock = () => {
  const { address } = walletModel.useCurrentWallet();

  if (address) {
    return <WalletCard wallet={address} />;
  }

  return <ConnectButton />;
};

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Navigation pages={Routes} />
        <div className={styles.wallet}>
          <WalletBlock />
        </div>
        <div className={styles.chainSelect}>
          <SetCurrentChain />
        </div>
      </div>
    </div>
  );
};
