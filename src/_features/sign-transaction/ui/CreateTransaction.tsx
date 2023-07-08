import { useState } from "react";
import { FunctionInputs, TAbiFunction, TContract } from "@entities/contract";
import { TxGenerator } from "./TxGenerator";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
};

export const CreateTransaction = ({ contract, abiItem }: TProps) => {
  const [args, setArgs] = useState<string[] | null>(null);

  return (
    <div>
      <div>
        <FunctionInputs
          abiItem={abiItem}
          onSubmit={setArgs}
          buttonText="Create transaction"
        />
      </div>

      {args && (
        <div>
          <TxGenerator contract={contract} abiItem={abiItem} args={args} />
        </div>
      )}
    </div>
  );
};
