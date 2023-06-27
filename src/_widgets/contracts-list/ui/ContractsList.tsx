import { AddContract } from "@features/add-contract";
import { SmallCard, contractModel } from "@entities/contract";

import styles from "./ContractsList.module.scss";
import classNames from "classnames";

export const ContractsList = () => {
  const { currentId, contracts } = contractModel.useContracts();
  console.log(contracts);
  return (
    <div className={styles.root}>
      <AddContract />

      {contracts.map((item) => (
        <div
          key={item.id}
          className={classNames(styles.card, {
            [styles.selected]: currentId == item.id,
          })}
        >
          <SmallCard contract={item} />
        </div>
      ))}
    </div>
  );
};
