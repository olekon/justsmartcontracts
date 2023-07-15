import { TValueInput } from "@shared/lib/props";
import { TAbiParam } from "../model/types";
import { AddressInput } from "@shared/ui/AddressInput";
import { TAddress } from "@shared/lib/web3";
import { Input } from "antd";
import { BoolInput } from "@shared/ui/BoolInput";

type TProps = TValueInput<string> & {
  abiParam: TAbiParam;
};

export const ParamInput = ({ value, onChange, abiParam }: TProps) => {
  if (abiParam.type == "address") {
    return <AddressInput value={value as TAddress} onChange={onChange} />;
  }

  if (abiParam.type == "bool") {
    return (
      <BoolInput
        value={value == "1"}
        onChange={(value) => onChange(value ? "1" : "0")}
      />
    );
  }

  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};
