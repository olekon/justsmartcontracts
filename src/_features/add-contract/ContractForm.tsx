import { Button, Form, Input } from "antd";

type TProps = {
  onSubmit: (values: any) => void;
};

export const ContractForm = ({ onSubmit }: TProps) => {
  //TODO add chain select
  return (
    <Form
      preserve={false}
      layout="vertical"
      name="add-contract"
      onFinish={onSubmit}
    >
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
        <Input.TextArea rows={15} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
