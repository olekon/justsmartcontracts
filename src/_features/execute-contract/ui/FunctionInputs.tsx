import { TAbiFunction, contractUtils } from "@entities/contract";
import { Button, Form, Input } from "antd";

type TProps = {
  abiItem: TAbiFunction;
  onSubmit: (values: [unknown]) => void;
  buttonText: string;
};

export const FunctionInputs = ({ abiItem, onSubmit, buttonText }: TProps) => {
  const submit = (values: any) => {
    onSubmit(values);
  };

  return (
    <Form layout="horizontal" onFinish={submit}>
      {abiItem.inputs.map((input, index) => (
        <Form.Item
          key={index}
          label={`${input.name} (${input.type})`}
          name={index}
          initialValue={contractUtils.getDefaultValue(input)}
        >
          {/* <CustomInput type={input.type}></CustomInput> */}
          <Input style={{ width: "400px" }} />
        </Form.Item>
      ))}

      <Form.Item>
        <Button htmlType="submit">{buttonText}</Button>
      </Form.Item>
    </Form>
  );
};
