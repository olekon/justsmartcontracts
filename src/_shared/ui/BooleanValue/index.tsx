import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

export const BooleanValue = ({ value }: { value: boolean | string }) => {
  return value === true || value === "true" ? (
    <Tooltip title="true">
      <CheckOutlined />
    </Tooltip>
  ) : (
    <Tooltip title="false">
      <CloseOutlined />
    </Tooltip>
  );
};
