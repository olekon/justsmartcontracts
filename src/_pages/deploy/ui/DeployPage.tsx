import { TAbiItem } from "@entities/contract";
import { DeployForm } from "./DeployForm";

export const DeployPage = () => {
  const setDeployContract = (abi: TAbiItem[], byteCode: string) => {
    console.log(abi, byteCode);
  };
  return (
    <>
      <h1>Deploy new contract</h1>
      <DeployForm onChange={setDeployContract} />
    </>
  );
};
