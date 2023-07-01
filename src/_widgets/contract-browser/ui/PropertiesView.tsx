import { contractModel } from "@entities/contract";

type TProps = {
  contract: contractModel.TContract;
};

export const PropertiesView = ({ contract }: TProps) => {
  return <>{contract.name}</>;
};
