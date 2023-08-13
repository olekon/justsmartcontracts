import { FunctionInputs } from "@entities/contract";
import { FlexVertical } from "@shared/ui/Grid";

import { DeployForm } from "./DeployForm";
import { useDeployContractInputs } from "../model/useDeployContract";
import { useDeployTransaction } from "../model/useDeployTransaction";

export const DeployPage = () => {
  const { ctor, byteCode, load } = useDeployContractInputs();

  const sendTransaction = useDeployTransaction();

  const handleCtorInputs = async (values: string[]) => {
    sendTransaction(ctor, byteCode, values);
  };

  return (
    <FlexVertical>
      <h1>Deploy new contract</h1>
      <DeployForm onChange={load} />

      {ctor && (
        <FunctionInputs
          abiItem={ctor}
          buttonText="Deploy"
          onSubmit={handleCtorInputs}
        />
      )}
    </FlexVertical>
  );
};
