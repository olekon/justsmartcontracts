import { TAbiItem } from "@entities/contract";
import { DeployForm } from "./DeployForm";
import { FlexVertical } from "@shared/ui/Grid";

export const DeployPage = () => {
  const setDeployContract = (abi: TAbiItem[], byteCode: string) => {
    console.log(abi, byteCode);
  };
  return (
    <FlexVertical>
      <h1>Deploy new contract</h1>
      <DeployForm onChange={setDeployContract} />
    </FlexVertical>
  );
};
