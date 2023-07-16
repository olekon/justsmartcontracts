import { Button, Form, Input, Space } from "antd";
import { TTransactionParams } from "@shared/lib/tx";
import { AddressInput } from "@shared/ui/AddressInput";
import { Row, Col2, Col3, Col1 } from "@shared/ui/Grid";
import { TAbiFunction, TContract } from "@entities/contract";
import { AmountInput, Mode } from "@shared/ui/AmountInput";
import { useTransactionParamsForm } from "../model";
import { DownloadTransaction } from "./DownloadTransaction";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
  args: string[];
  disabled?: boolean;
  onSubmit: (values: TTransactionParams) => void;
};

export const SignTransactionForm = ({
  contract,
  abiItem,
  args,
  disabled,
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
      disabled={disabled}
    >
      <Row>
        <Col2>
          <Form.Item
            label="From address"
            name="from"
            rules={[{ required: true, message: "From address missing" }]}
          >
            {/* @ts-ignore value and onChange props are supplied by Form.Item */}
            <AddressInput disabled={disabled} />
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
            {/* @ts-ignore value and onChange props are supplied by Form.Item */}
            <AmountInput
              disabled={!payable || disabled}
              defaultMode={Mode.ETH}
            />
          </Form.Item>
        </Col3>

        <Col3>
          <Form.Item
            label="Nonce"
            name="nonce"
            rules={[{ required: true, message: "Nonce missing" }]}
          >
            <Input type="number" />
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
            <Input type="number" />
          </Form.Item>
        </Col3>
        <Col3>
          <Form.Item
            label="Max fee per gas"
            name="maxFee"
            rules={[{ required: true, message: "Max fee missing" }]}
          >
            {/* @ts-ignore value and onChange props are supplied by Form.Item */}
            <AmountInput disabled={disabled} defaultMode={Mode.GWEI} />
          </Form.Item>
        </Col3>
        <Col3>
          <Form.Item
            label="Max priority fee per gas"
            name="maxPriorityFee"
            rules={[{ required: true, message: "Max priority fee missing" }]}
          >
            {/* @ts-ignore value and onChange props are supplied by Form.Item */}
            <AmountInput disabled={disabled} defaultMode={Mode.GWEI} />
          </Form.Item>
        </Col3>
      </Row>

      <Row>
        <Col1>
          <Form.Item label="Data" name="data">
            <Input.TextArea rows={5} />
          </Form.Item>
        </Col1>
      </Row>

      <Form.Item>
        <Space align="center">
          <Button type="primary" htmlType="submit">
            Sign
          </Button>

          <DownloadTransaction fetchTxFields={() => form.getFieldsValue()} />
        </Space>
      </Form.Item>
    </Form>
  );
};
