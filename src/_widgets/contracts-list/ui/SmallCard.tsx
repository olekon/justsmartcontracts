import { ReactNode } from "react";
import { AddressIcon } from "@shared/ui/AddressIcon";
import { ExternalLink } from "@shared/ui/ExternalLink";
import { TContract } from "@entities/contract";
import { chainModel } from "@entities/chain";

import styles from "./SmallCard.module.scss";

type TProps = {
  contract: TContract;
  extra?: ReactNode;
};

export const SmallCard = ({ contract, extra }: TProps) => {
  const { getAddressUrl } = chainModel.useChainExplorer(contract.chain);

  const url = getAddressUrl(contract.address);

  const address = url ? (
    <ExternalLink href={url} className={styles.address}>
      {contract.address}
    </ExternalLink>
  ) : (
    <p className={styles.address}>{contract.address}</p>
  );

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <AddressIcon address={contract.address} size="small" />
        {extra && <div>{extra}</div>}
      </div>
      <p className={styles.title}>{contract.name}</p>
      {address}
    </div>
  );
};
