import { Button, Form, Input } from "antd";
import { ChainSelect, chainModel } from "@entities/chain";

type TProps = {
  onSubmit: (values: any) => void;
};

// @ts-ignore
const CustomChainInput = ({
  value,
  onChange,
}: {
  value?: any;
  onChange?: any;
}) =>
  value && onChange ? <ChainSelect value={value} onChange={onChange} /> : null;

export const ContractForm = ({ onSubmit }: TProps) => {
  const { chain } = chainModel.useCurrentChain();

  return (
    <Form
      preserve={false}
      initialValues={{ chain }}
      layout="vertical"
      name="add-contract"
      onFinish={onSubmit}
    >
      <Form.Item label="Chain" name="chain">
        <CustomChainInput />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Contract name missing" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Contract address missing" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="ABI"
        name="abi"
        rules={[{ required: true, message: "Contract ABI missing" }]}
      >
        <Input.TextArea rows={10} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
