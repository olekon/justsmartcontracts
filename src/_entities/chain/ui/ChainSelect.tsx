import { Select } from "antd";
import { TChainId } from "@shared/lib/web3";
import { TValueInput } from "@shared/lib/props";
import { useChainList } from "../model/useChainList";
import { useMemo } from "react";

type TChainOption = {
  value: TChainId;
  label: string;
  testnet?: number;
};

type TProps = TValueInput<TChainId> & {};

export const ChainSelect = ({ value, onChange }: TProps) => {
  const list = useChainList();

  const chainOptions: TChainOption[] = useMemo(() => {
    return list.map((item) => ({ value: item.chainId, label: item.name }));
  }, [list]);

  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      defaultValue={value}
      onChange={onChange}
      options={chainOptions}
      optionFilterProp="label"
    />
  );
};
