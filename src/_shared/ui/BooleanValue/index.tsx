import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

export const BooleanValue = ({ value }: { value: boolean | string }) => {
  return value === true || value === "true" ? (
    <PlusOutlined />
  ) : (
    <MinusOutlined />
  );
};
