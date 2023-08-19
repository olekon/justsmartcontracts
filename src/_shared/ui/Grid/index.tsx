import { Row as AntRow, Col as AntCol, Space } from "antd";
import { TSize, TWithChildren, TWithSize } from "@shared/lib/props";
import { SizeType } from "antd/es/config-provider/SizeContext";

export const Row = ({ children }: TWithChildren) => (
  <AntRow gutter={8}>{children}</AntRow>
);

export const Col = ({
  children,
  share = 2,
}: TWithChildren & { share?: number }) => (
  <AntCol span={24 / share}>{children}</AntCol>
);

export const Col1 = ({ children }: TWithChildren) => (
  <Col share={1}>{children}</Col>
);

export const Col2 = ({ children }: TWithChildren) => (
  <Col share={2}>{children}</Col>
);

export const Col3 = ({ children }: TWithChildren) => (
  <Col share={3}>{children}</Col>
);

const sizeToAntd = (size: TSize): SizeType => {
  return {
    large: "large",
    medium: "middle",
    small: "small",
  }[size] as SizeType;
};

export const FlexVertical = ({ children, size }: TWithChildren & TWithSize) => {
  return (
    <Space
      style={{ width: "100%" }}
      direction="vertical"
      size={sizeToAntd(size || "medium")}
    >
      {children}
    </Space>
  );
};

export const FlexHorizontal = ({
  children,
  size,
}: TWithChildren & TWithSize) => {
  return (
    <Space
      style={{ width: "100%" }}
      align="center"
      size={sizeToAntd(size || "medium")}
    >
      {children}
    </Space>
  );
};
