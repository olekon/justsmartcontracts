import { Input } from "antd";
import { TValueInput } from "@shared/lib/props";
import { AddressInput } from "@shared/ui/AddressInput";
import { TAddress } from "@shared/lib/web3";
import { BoolInput } from "@shared/ui/BoolInput";
import { AmountInput } from "@shared/ui/AmountInput";

import { TAbiParam } from "../model/types";

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

  if (abiParam.type == "uint256") {
    return <AmountInput value={String(value)} onChange={onChange} />;
  }

  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};
