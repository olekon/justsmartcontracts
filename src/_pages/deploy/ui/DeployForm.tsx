import { TAbiItem } from "@entities/contract";
import { Row, Col2 } from "@shared/ui/Grid";
import { Input } from "antd";
import { useState } from "react";

type TProps = {
  onChange: (_abi: TAbiItem[], _byteCode: string) => void;
};

export const DeployForm = ({ onChange }: TProps) => {
  const [abi, setAbi] = useState<string>("");
  const [byteCode, setByteCode] = useState<string>("");
  const [abiError, setAbiError] = useState("");

  const getAbiObject = (value: string) => {
    try {
      return JSON.parse(value) as TAbiItem[];
    } catch {
      setAbiError("Invalid ABI");
      return [];
    }
  };

  const handleAbiChange = (value: string) => {
    setAbi(value);

    onChange(getAbiObject(value), byteCode);
  };

  const handleByteCodeChange = (value: string) => {
    setByteCode(value);

    onChange(getAbiObject(abi), value);
  };

  return (
    <div>
      <Row>
        <Col2>
          <Input.TextArea
            rows={20}
            status={abiError && "error"}
            onChange={(e) => handleAbiChange(e.target.value)}
            value={abi}
          />
        </Col2>
        <Col2>
          <Input.TextArea
            rows={20}
            onChange={(e) => handleByteCodeChange(e.target.value)}
            value={byteCode}
          />
        </Col2>
      </Row>
    </div>
  );
};
