import { BooleanValue } from "@shared/ui/BooleanValue";
import { TAbiParam } from "../model/types";
import { AddressValue } from "@shared/ui/AddressValue";
import { TAddress } from "@shared/lib/web3";

type TProps = {
  abiType: TAbiParam;
  value: unknown;
};

export const ParamValue = ({ abiType, value }: TProps) => {
  if (abiType.type === "bool") {
    return <BooleanValue value={String(value)} />;
  }

  if (abiType.type === "address") {
    return <AddressValue value={value as TAddress} />;
  }

  if (abiType.type === "uint256") {
    return <>{String(value)}</>;
  }

  return <>{String(value)}</>;
};
