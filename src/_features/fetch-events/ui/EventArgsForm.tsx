import { Button, Divider, Form, Input } from "antd";
import { Col2, FlexVertical, Row } from "@shared/ui/Grid";
import { TAbiEvent } from "@entities/contract";
import { EventFilterInput } from "./EventFilterInput";
import { TEventBlockFilter, TEventQuery } from "../model/types";
import { useEventFilters } from "../model/useEventFilters";

type TProps = {
  event: TAbiEvent;
  loading?: boolean;
  onSubmit: (values: TEventQuery) => void;
};

export const EventArgsForm = ({ event, loading, onSubmit }: TProps) => {
  const { filters, add, remove, update, enable } = useEventFilters(event);

  const submit = ({ fromBlock, toBlock }: TEventBlockFilter) => {
    const topics = Object.fromEntries(
      Object.entries(filters).filter(([, value]) => value.active)
    );

    onSubmit({
      ...(fromBlock && { fromBlock: Number(fromBlock) }),
      ...(toBlock && { toBlock: Number(toBlock) }),
      topics,
    });
  };

  return (
    <Form preserve={false} layout="vertical" onFinish={submit}>
      <FlexVertical size="large">
        <Row>
          <Col2>
            <Form.Item name="fromBlock" label="From block">
              <Input type="number" />
            </Form.Item>
          </Col2>
          <Col2>
            <Form.Item name="toBlock" label="To block">
              <Input type="number" />
            </Form.Item>
          </Col2>
        </Row>

        <Divider orientation="left" style={{ margin: 0 }}>
          Filter by
        </Divider>
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
          <Button type="primary" htmlType="submit" loading={loading}>
            Fetch
          </Button>
        </Form.Item>
      </FlexVertical>
    </Form>
  );
};
