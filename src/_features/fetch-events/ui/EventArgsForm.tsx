import { Button, Form, Input, Space } from "antd";
import { Col2, FlexVertical, Row } from "@shared/ui/Grid";
import { TAbiEvent } from "@entities/contract";

import { TEventArgs } from "../model/types";
import { useEventFilters } from "../model/useEventFilters";
import { EventFilterInput } from "./EventFilterInput";

type TProps = {
  event: TAbiEvent;
  onSubmit: (values: TEventArgs) => void;
};

export const EventArgsForm = ({ event, onSubmit }: TProps) => {
  const { filters, add, remove, update, enable } = useEventFilters(event);

  const submit = (values: any) => {
    console.log(values);
    console.log(filters);
  };

  return (
    <Form preserve={false} layout="vertical" onFinish={submit}>
      <FlexVertical size="large">
        <Row>
          <Col2>
            <Form.Item name="formBlock" label="From block">
              <Input type="number" />
            </Form.Item>
          </Col2>
          <Col2>
            <Form.Item name="toBlock" label="To block">
              <Input />
            </Form.Item>
          </Col2>
        </Row>

        <Row>
          <Col2>
            <FlexVertical size="large">
              {Object.entries(filters).map(([name, filter]) => (
                <EventFilterInput
                  key={name}
                  name={name}
                  filter={filter}
                  add={() => add(name)}
                  remove={() => remove(name)}
                  update={(index, value) => update(name, index, value)}
                  enable={(value) => enable(name, value)}
                />
              ))}
            </FlexVertical>
          </Col2>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Fetch
          </Button>
        </Form.Item>
      </FlexVertical>
    </Form>
  );
};
