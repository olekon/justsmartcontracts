import { FunctionInputs, TAbiFunction, TContract } from "@entities/contract";
import { useState } from "react";
import { SignTransaction } from "./SignTransaction";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
};

export const CreateTransaction = ({ contract, abiItem }: TProps) => {
  const [args, setArgs] = useState<string[] | null>(null);
  const [formUpdate, setFormUpdate] = useState(0);

  const createTransaction = (values: string[]) => {
    setArgs(values);
    setFormUpdate((state) => state + 1);
  };

  return (
    <div>
      <div>
        <FunctionInputs
          abiItem={abiItem}
          onSubmit={createTransaction}
          buttonText="Create transaction"
        />
      </div>

      {args && (
        <div>
          <SignTransaction
            key={formUpdate}
            contract={contract}
            abiItem={abiItem}
            args={args}
          />
        </div>
      )}
    </div>
  );
};
