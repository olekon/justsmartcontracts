import cn from "classnames";
import { AddContractButton } from "@features/add-contract";
import { RemoveContractButton } from "@features/remove-contract";
import { EditContractButton } from "@features/edit-contract";
import { TContract, contractModel } from "@entities/contract";
import { useCurrentChainContracts } from "../model";
import { SmallCard } from "./SmallCard";

import styles from "./ContractsList.module.scss";

const EditButtons = ({ contract }: { contract: TContract }) => {
  return (
    <div className={styles.editButtons}>
      <EditContractButton contract={contract} />
      <RemoveContractButton contract={contract} />
    </div>
  );
};

export const ContractsList = () => {
  const { currentId, setCurrent } = contractModel.useContracts();
  const contracts = useCurrentChainContracts();

  return (
    <div className={styles.root}>
      <AddContractButton />

      {contracts.map((item) => (
        <div
          key={item.id}
          className={cn(styles.card, {
            [styles.selected]: currentId == item.id,
          })}
          onClick={() => setCurrent(item.id)}
        >
          <SmallCard contract={item} extra={<EditButtons contract={item} />} />
        </div>
      ))}
    </div>
  );
};
