import { BooleanValue } from "@shared/ui/BooleanValue";
import { TAbiParamType } from "../model/types";
import { AddressValue } from "@shared/ui/AddressValue";
import { TAddress } from "@shared/lib/web3";
import JSONbig from "json-bigint";

type TProps = {
  abiType: TAbiParamType;
  value: unknown;
};

export const ParamValue = ({ abiType, value }: TProps) => {
  if (abiType === "bool") {
    return <BooleanValue value={String(value)} />;
  }

  if (abiType === "address") {
    return <AddressValue value={value as TAddress} />;
  }

  if (abiType === "uint256") {
    return <>{String(value)}</>;
  }
  return (
    <span style={{ whiteSpace: "preserve" }}>
      {JSONbig.stringify(value, null, 2)}
    </span>
  );
};
