import { BooleanValue } from "@shared/ui/BooleanValue";
import { TAbiParamType } from "../model/types";
import { AddressValue } from "@shared/ui/AddressValue";
import { TAddress } from "@shared/lib/web3";
import JSONbig from "json-bigint";

type TProps = {
  abiType: TAbiParamType;
  value: unknown;
  name?: string;
};

export const ParamValue = ({ abiType, value, name }: TProps) => {
  let resultTag = null;
  if (abiType === "bool") {
    resultTag = <BooleanValue value={String(value)} />;
  } else if (abiType === "address") {
    resultTag = <AddressValue value={value as TAddress} />;
  } else if (abiType === "uint256") {
    resultTag = <>{String(value)}</>;
  } else {
    resultTag = (
      <span style={{ whiteSpace: "preserve" }}>
        {JSONbig.stringify(value, null, 2)}
      </span>
    );
  }
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <span style={{ color: "gray", fontStyle: "italic" }}>{name ?? ""}</span>
      {resultTag}
    </div>
  );
};
