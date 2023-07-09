import { FunctionInputs, TAbiFunction, TContract } from "@entities/contract";
import { SignTransactionForm } from "./SignTransactionForm";
import { useEncodeFunctionInputs } from "../model/useEncodeFunctionInput";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
};

export const CreateTransaction = ({ contract, abiItem }: TProps) => {
  const { updateArgs, encodedData } = useEncodeFunctionInputs(
    contract,
    abiItem
  );

  return (
    <div>
      <div>
        <FunctionInputs
          abiItem={abiItem}
          onSubmit={updateArgs}
          buttonText="Create transaction"
        />
      </div>

      {encodedData && (
        <div>
          <SignTransactionForm
            toAddress={contract.address}
            payable={abiItem.stateMutability == "payable"}
            data={encodedData}
          />
        </div>
      )}
    </div>
  );
};
