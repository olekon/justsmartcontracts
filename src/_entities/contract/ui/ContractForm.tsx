import { Button, Form, Input } from "antd";
import { ChainSelect, chainModel } from "@entities/chain";
import { TAbiItem, TContractWithoutId } from "../model/types";

type TProps = {
  onSubmit: (values: TContractWithoutId) => void;
  buttonText: string;
  value?: TContractWithoutId;
};

const abiTransformer = (value: string) => JSON.parse(value) as TAbiItem[];

// @ts-ignore
const CustomChainInput = ({
  value,
  onChange,
}: {
  value?: any;
  onChange?: any;
}) =>
  value && onChange ? <ChainSelect value={value} onChange={onChange} /> : null;

export const ContractForm = ({ buttonText, value, onSubmit }: TProps) => {
  const { chain } = chainModel.useCurrentChain();

  const initialValue = value || { chain };

  const submitHandler = (formValues: any) => {
    onSubmit({
      ...formValues,
      abi: JSON.parse(formValues.abi),
    });
  };

  return (
    <Form
      preserve={false}
      initialValues={initialValue}
      layout="vertical"
      name="add-contract"
      onFinish={submitHandler}
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
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};
