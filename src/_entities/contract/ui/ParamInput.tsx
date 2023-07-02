import { TValueInput } from "@shared/lib/props";
import { TAbiParam } from "../model/types";
import { AddressInput } from "@shared/ui/AddressInput";
import { TAddress } from "@shared/lib/web3";
import { Input } from "antd";

type TProps = TValueInput<string> & {
  abiParam: TAbiParam;
};

export const ParamInput = ({ value, onChange, abiParam }: TProps) => {
  if (abiParam.type == "address") {
    return <AddressInput value={value as TAddress} onChange={onChange} />;
  }
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};
