import { ReactNode } from "react";
import { AddressIcon } from "@shared/ui/AddressIcon";
import { ExternalLink } from "@shared/ui/ExternalLink";
import { getAddressUrl } from "@shared/lib/web3";
import { TContract } from "../model/types";

import styles from "./SmallCard.module.scss";
import { truncateAddress } from "../helper/address";

type TProps = {
  contract: TContract;
  extra?: ReactNode;
};

export const SmallCard = ({ contract, extra }: TProps) => {
  const url = getAddressUrl(contract.chain, contract.address);

  const address = url ? (
    <ExternalLink
      href={getAddressUrl(contract.chain, contract.address)}
      className={styles.address}
    >
      {contract.address}
    </ExternalLink>
  ) : (
    <p className={styles.address}>{truncateAddress(contract.address)}</p>
  );

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <AddressIcon address={contract.address} size="small" />
        <p className={styles.title}>{contract.name}</p>
        {extra && <div>{extra}</div>}
      </div>
      {address}
    </div>
  );
};
