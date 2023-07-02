import { Button, Form } from "antd";
import { useCallback } from "react";
import { ParamInput, TAbiFunction, contractUtils } from "@entities/contract";

type TProps = {
  abiItem: TAbiFunction;
  onSubmit: (values: string[]) => void;
  buttonText: string;
};

export const FunctionInputs = ({ abiItem, onSubmit, buttonText }: TProps) => {
  const submit = useCallback(
    (values: Record<number | string, string>) => {
      const argsLength = Object.keys(values).length;

      const result = [...Array(argsLength).keys()].map(
        (key) => values[String(key)]
      );

      onSubmit(result);
    },
    [onSubmit]
  );

  return (
    <Form layout="horizontal" onFinish={submit}>
      {abiItem.inputs.map((input, index) => (
        <Form.Item
          key={index}
          label={`${input.name} (${input.type})`}
          name={index}
          initialValue={contractUtils.getDefaultValue(input)}
        >
          {/* @ts-ignore value and onChange props are supplied by Form.Item */}
          <ParamInput abiParam={input} />
        </Form.Item>
      ))}

      <Form.Item>
        <Button htmlType="submit">{buttonText}</Button>
      </Form.Item>
    </Form>
  );
};
