import { Button, Switch } from "antd";
import { TEventFilter } from "../model/types";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { ParamInput } from "@entities/contract";
import { FlexHorizontal, FlexVertical } from "@shared/ui/Grid";

type TProps = {
  name: string;
  filter: TEventFilter;
  enable: (value: boolean) => void;
  add: () => void;
  remove: () => void;
  update: (index: number, value: string) => void;
};

export const EventFilterInput = ({
  name,
  filter,
  enable,
  add,
  remove,
  update,
}: TProps) => {
  return (
    <FlexVertical>
      <FlexHorizontal>
        <p>{`${name} (${filter.type})`}</p>
        <span>
          <Switch onChange={enable} />
        </span>
        <span>
          <Button size="small" onClick={add}>
            <PlusOutlined />
          </Button>
        </span>
        <span>
          <Button
            size="small"
            disabled={filter.values.length <= 1}
            onClick={remove}
          >
            <MinusOutlined />
          </Button>
        </span>
      </FlexHorizontal>
      <FlexVertical size="small">
        {filter.values.map((item, index) => (
          <ParamInput
            key={index}
            abiParam={filter.type}
            onChange={(value) => update(index, value)}
            value={item}
          />
        ))}
      </FlexVertical>
    </FlexVertical>
  );
};
