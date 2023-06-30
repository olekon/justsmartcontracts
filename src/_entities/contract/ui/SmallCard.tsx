import { ReactNode } from "react";
import { TContract } from "../model";

import styles from "./SmallCard.module.scss";
import { AddressIcon } from "@shared/ui/AddressIcon";

type TProps = {
  contract: TContract;
  extra?: ReactNode;
};

export const SmallCard = ({ contract, extra }: TProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <AddressIcon address={contract.address} size="small" />
        {extra && <div>{extra}</div>}
      </div>
      <p className={styles.title}>{contract.name}</p>
      <p className={styles.address}>{contract.address}</p>
    </div>
  );
};
