import { Select } from "antd";
import { Chain, getChainConfig } from "@shared/lib/web3";
import { TValueInput } from "@shared/lib/props";
import { SupportedChains } from "../model";

type TChainOption = {
  value: Chain;
  label: string;
  testnet: number;
};

const compareItems = (a: TChainOption, b: TChainOption) => {
  if (a.testnet === b.testnet) {
    return Number(a.value) - Number(b.value);
  }

  return a.testnet - b.testnet;
};

const ChainOptions: TChainOption[] = [...SupportedChains]
  .map((chain) => ({
    value: chain,
    label: getChainConfig(chain).name,
    testnet: getChainConfig(chain).testnet ? 1 : 0,
  }))
  .sort(compareItems);

type TProps = TValueInput<Chain> & {};

export const ChainSelect = ({ value, onChange }: TProps) => {
  const options = ChainOptions.filter(({ testnet }) => !testnet);
  const testnetOptions = ChainOptions.filter(({ testnet }) => testnet);

  return (
    <Select
      style={{ width: "100%" }}
      defaultValue={value}
      onChange={onChange}
      options={[...options, { label: "Testnets", options: testnetOptions }]}
    />
  );
};
