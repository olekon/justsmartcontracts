import { walletModel } from "@entities/wallet";
import { TTransactionParams } from "@shared/lib/tx";
import { TAddress } from "@shared/lib/web3";
import { Button, Form, Input } from "antd";
import { useTransactionParamsForm } from "../model";
import { AddressInput } from "@shared/ui/AddressInput";

type TProps = {
  toAddress?: TAddress;
  payable?: boolean;
  data: string;
};

export const SignTransactionForm = ({ toAddress, payable, data }: TProps) => {
  const { form, onValuesChange } = useTransactionParamsForm();

  const { address } = walletModel.useCurrentWallet();

  const initialValues: Partial<TTransactionParams> = {
    to: toAddress,
    from: address || undefined,
    nonce: 0,
    data,
  };

  const onSubmit = (values: TTransactionParams) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      initialValues={initialValues}
      preserve={false}
      layout="vertical"
      name="add-contract"
      onFinish={onSubmit}
      onValuesChange={onValuesChange}
    >
      <Form.Item
        label="From address"
        name="from"
        rules={[{ required: true, message: "From address missing" }]}
      >
        {/* @ts-ignore value and onChange props are supplied by Form.Item */}
        <AddressInput />
      </Form.Item>

      <Form.Item
        label="Nonce"
        name="nonce"
        rules={[{ required: true, message: "Nonce missing" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="To address" name="to">
        {/* @ts-ignore value and onChange props are supplied by Form.Item */}
        <AddressInput />
      </Form.Item>

      <Form.Item label="ETH value" name="value">
        <Input disabled={!payable} />
      </Form.Item>

      <Form.Item
        label="Gas limit"
        name="gas"
        rules={[{ required: true, message: "Gas limit missing" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Max fee per gas"
        name="maxFee"
        rules={[{ required: true, message: "Max fee missing" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Max priority fee per gas"
        name="maxPriorityFee"
        rules={[{ required: true, message: "Max priority fee missing" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign
        </Button>
      </Form.Item>
    </Form>
  );
};
