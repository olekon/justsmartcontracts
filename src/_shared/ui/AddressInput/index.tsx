import { Input } from "antd";
import { TValueInput, TWithClassname } from "@shared/lib/props";
import { TAddress } from "@shared/lib/web3";
import { AddressIcon } from "../AddressIcon";

type TProps = TWithClassname &
  TValueInput<TAddress> & {
    disabled?: boolean;
  };

export const AddressInput = ({
  value,
  onChange,
  className,
  disabled = false,
}: TProps) => {
  return (
    <Input
      width="100%"
      maxLength={42}
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value as TAddress)}
      addonBefore={<AddressIcon address={value} size="small" />}
      autoComplete="off"
      disabled={disabled}
    />
  );
};
