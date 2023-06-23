"use client";
import { Select } from "antd";
import { Chain } from "@shared/lib/web3";
import { TValueInput } from "@shared/lib/props";

import { SupportedChains, ChainConfig } from "../model";

const ChainOptions = SupportedChains.map((chain) => ({
  value: chain,
  label: ChainConfig[chain].name,
}));

type TProps = TValueInput<Chain> & {};
export const ChainSelect = ({ value, onChange }: TProps) => {
  return (
    <Select defaultValue={value} onChange={onChange} options={ChainOptions} />
  );
};
