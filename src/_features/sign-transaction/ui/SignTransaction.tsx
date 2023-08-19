import { TAbiFunction, TContract } from "@entities/contract";
import { SignTransactionForm } from "./SignTransactionForm";
import { TTransactionParams } from "@shared/lib/tx";
import { useTransactionSend } from "../model/useTransactionSend";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
  args: string[];
};

export const SignTransaction = ({ contract, abiItem, args }: TProps) => {
  const { send } = useTransactionSend(contract.chain);

  const onSubmit = (values: TTransactionParams) => {
    send(values);
  };

  return (
    <SignTransactionForm
      contract={contract}
      abiItem={abiItem}
      args={args}
      onSubmit={onSubmit}
    />
  );
};
