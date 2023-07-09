import { FunctionInputs, TAbiFunction, TContract } from "@entities/contract";
import { useState } from "react";
import { SignTransaction } from "./SignTransaction";

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
          <SignTransaction
            key={args.join("")}
            contract={contract}
            abiItem={abiItem}
            args={args}
          />
        </div>
      )}
    </div>
  );
};
