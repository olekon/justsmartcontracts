import { Row as AntRow, Col as AntCol } from "antd";
import { TWithChildren } from "@shared/lib/props";

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
