import { BooleanValue } from "@shared/ui/BooleanValue";
import { TAbiParam } from "../model/types";

type TProps = {
  abiType: TAbiParam;
  value: unknown;
};

export const ParamValue = ({ abiType, value }: TProps) => {
  if (abiType.type === "bool") {
    return <BooleanValue value={String(value)} />;
  }

  if (abiType.type === "address") {
    return <>{String(value)}</>;
  }

  if (abiType.type === "uint256") {
    return <>{String(value)}</>;
  }

  return <>{String(value)}</>;
};
