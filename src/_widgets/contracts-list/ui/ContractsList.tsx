import cn from "classnames";
import { AddContractButton } from "@features/add-contract";
import { RemoveContractButton } from "@features/remove-contract";
import { EditContractButton } from "@features/edit-contract";
import { SmallCard, contractModel } from "@entities/contract";

import styles from "./ContractsList.module.scss";

const EditButtons = ({ contract }: { contract: contractModel.TContract }) => {
  return (
    <div className={styles.editButtons}>
      <EditContractButton contract={contract} />
      <RemoveContractButton contract={contract} />
    </div>
  );
};

export const ContractsList = () => {
  const { currentId, contracts, setCurrent } = contractModel.useContracts();
  console.log("List of contracts", currentId);

  return (
    <div className={styles.root}>
      <AddContractButton />

      {contracts.map((item) => (
        <div
          key={item.id}
          className={cn(styles.card, {
            [styles.selected]: currentId == item.id,
          })}
          onClick={(e) => setCurrent(item.id)}
        >
          <SmallCard contract={item} extra={<EditButtons contract={item} />} />
        </div>
      ))}
    </div>
  );
};
