import { Input, Select } from "antd";
import { useState } from "react";
import { formatUnits, parseUnits } from "viem";
import { TValueInput } from "@shared/lib/props";

type TProps = TValueInput<string>;

enum Mode {
  WEI = 0,
  GWEI = 9,
  ETH = 18,
}

const options = [
  {
    value: Mode.WEI,
    label: "wei",
  },
  {
    value: Mode.GWEI,
    label: "gwei",
  },
  {
    value: Mode.ETH,
    label: "eth",
  },
];

const getValidationRegexp = (mode: number) => {
  if (mode === Mode.WEI) {
    //only integer numbers fow 'wei'
    return /^\d+$/;
  }

  if (mode === Mode.GWEI) {
    //limit to 9 decimals for 'gwei'
    return /^(\d+\.?\d{0,9}|\.\d{1,9})$/;
  }

  //limit to 18 decimals for 'ether'
  return /^(\d+\.?\d{0,18}|\.\d{1,18})$/;
};

const convertToWei = (mode: Mode, value: string) => {
  return String(parseUnits(value as `${number}`, mode));
};

const convertFromWei = (mode: Mode, value: string) => {
  return String(formatUnits(BigInt(value), mode));
};

export const AmountInput = ({ value, onChange }: TProps) => {
  const defaultMode = Mode.WEI;

  const [formatted, setFormatted] = useState(
    convertFromWei(defaultMode, value)
  );

  const [mode, setMode] = useState(defaultMode);

  const handleModeChange = (newMode: Mode) => {
    //convert stored value from old mode to new mode
    const weis = convertToWei(mode, formatted);
    const value = convertFromWei(newMode, weis);
    setMode(newMode);
    setFormatted(value);
  };

  const handleValueChange = (e: string) => {
    const reg = getValidationRegexp(mode);

    if ((!Number.isNaN(e) && reg.test(e)) || e === "") {
      setFormatted(e);

      onChange(convertToWei(mode, e || "0"));
    }
  };

  const modeSelect = (
    <Select
      options={options}
      defaultValue={defaultMode}
      style={{ width: 80 }}
      onChange={handleModeChange}
    />
  );

  return (
    <Input
      addonAfter={modeSelect}
      value={formatted}
      onChange={(e) => handleValueChange(e.target.value)}
    />
  );
};
