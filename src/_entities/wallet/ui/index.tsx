import { TAddress } from "@shared/lib/web3";
import { AddressIcon } from "@shared/ui/AddressIcon";

import styles from "./WalletCard.module.scss";

type TProps = {
  wallet: TAddress;
};
export const WalletCard = ({ wallet }: TProps) => {
  return (
    <div className={styles.root}>
      <AddressIcon size="small" address={wallet} />
      <span>{wallet}</span>
    </div>
  );
};
