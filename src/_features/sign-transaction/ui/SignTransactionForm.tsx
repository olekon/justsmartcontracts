import { Button, Form, Input } from "antd";
import { TTransactionParams } from "@shared/lib/tx";
import { AddressInput } from "@shared/ui/AddressInput";
import { Row, Col2, Col3 } from "@shared/ui/Grid";
import { useTransactionParamsForm } from "../model";
import { TAbiFunction, TContract } from "@entities/contract";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
  args: string[];
  onSubmit: (values: TTransactionParams) => void;
};

export const SignTransactionForm = ({
  contract,
  abiItem,
  args,
  onSubmit,
}: TProps) => {
  const { form, initialValues, payable, onValuesChange } =
    useTransactionParamsForm(contract, abiItem, args);

  return (
    <Form
      form={form}
      initialValues={initialValues}
      layout="vertical"
      onFinish={onSubmit}
      onValuesChange={onValuesChange}
    >
      <Row>
        <Col2>
          <Form.Item
            label="From address"
            name="from"
            rules={[{ required: true, message: "From address missing" }]}
          >
            {/* @ts-ignore value and onChange props are supplied by Form.Item */}
            <AddressInput />
          </Form.Item>
        </Col2>
        <Col2>
          <Form.Item label="To address" name="to">
            {/* @ts-ignore value and onChange props are supplied by Form.Item */}
            <AddressInput disabled />
          </Form.Item>
        </Col2>
      </Row>

      <Row>
        <Col3>
          <Form.Item label="ETH value" name="value">
            <Input disabled={!payable} />
          </Form.Item>
        </Col3>

        <Col3>
          <Form.Item
            label="Nonce"
            name="nonce"
            rules={[{ required: true, message: "Nonce missing" }]}
          >
            <Input />
          </Form.Item>
        </Col3>
      </Row>

      <Row>
        <Col3>
          <Form.Item
            label="Gas limit"
            name="gas"
            rules={[{ required: true, message: "Gas limit missing" }]}
          >
            <Input />
          </Form.Item>
        </Col3>
        <Col3>
          <Form.Item
            label="Max fee per gas"
            name="maxFee"
            rules={[{ required: true, message: "Max fee missing" }]}
          >
            <Input />
          </Form.Item>
        </Col3>
        <Col3>
          <Form.Item
            label="Max priority fee per gas"
            name="maxPriorityFee"
            rules={[{ required: true, message: "Max priority fee missing" }]}
          >
            <Input />
          </Form.Item>
        </Col3>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign
        </Button>
      </Form.Item>
    </Form>
  );
};
