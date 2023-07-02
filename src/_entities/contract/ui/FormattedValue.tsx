import { BooleanValue } from "@shared/ui/BooleanValue";
import { TAbiType } from "../model/types";

type TProps = {
  abiType: TAbiType;
  value: unknown;
};

export const FormattedValue = ({ abiType, value }: TProps) => {
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
