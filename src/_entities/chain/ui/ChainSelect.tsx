"use client";
import { FormSelect } from "react-bootstrap";
import { Chain } from "@shared/lib/web3";
import { TValueInput } from "@shared/lib/props";

import { SupportedChains, ChainConfig } from "../model";

type TProps = TValueInput<Chain> & {};
export const ChainSelect = ({ value, onChange }: TProps) => {
  const onValueChange = (e: any) => {
    console.log(e);
  };

  return (
    <FormSelect value={value} onChange={onValueChange}>
      {SupportedChains.map((chain) => (
        <option key={chain} value={chain}>
          {ChainConfig[chain].name}
        </option>
      ))}
    </FormSelect>
  );
};
