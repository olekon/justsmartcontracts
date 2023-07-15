import { TValueInput } from "@shared/lib/props";
import { Radio } from "antd";

type TProps = TValueInput<boolean>;

const options = [
  {
    value: true,
    label: "True",
  },
  {
    value: false,
    label: "False",
  },
];

export const BoolInput = ({ value, onChange }: TProps) => {
  return (
    <Radio.Group
      optionType="button"
      buttonStyle="solid"
      options={options}
      value={value}
      onChange={(e) => {
        console.log(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};
