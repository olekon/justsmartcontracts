import { TAbiItem } from "@entities/contract";
import { THexString } from "@shared/lib/web3";
import { Row, Col2, FlexVertical } from "@shared/ui/Grid";
import { Input, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import { isHex } from "viem";

type TProps = {
  onChange: (_abi: TAbiItem[], _byteCode: THexString) => void;
};

const validateHexString = (value: string): THexString => {
  return isHex(value) ? value : `0x${value}`;
};

export const DeployForm = ({ onChange }: TProps) => {
  const [abi, setAbi] = useState<string>("");
  const [byteCode, setByteCode] = useState<string>("");
  const [abiError, setAbiError] = useState("");

  const getAbiObject = (value: string) => {
    try {
      setAbiError("");
      return JSON.parse(value) as TAbiItem[];
    } catch {
      setAbiError("Invalid ABI");
      return [];
    }
  };

  const handleAbiChange = (value: string) => {
    setAbi(value);

    onChange(getAbiObject(value), validateHexString(byteCode));
  };

  const handleByteCodeChange = (value: string) => {
    setByteCode(value);

    onChange(getAbiObject(abi), validateHexString(value));
  };

  const handleBeforeUpload = (file: RcFile) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.result) {
        try {
          setAbiError("");

          const data = JSON.parse(fileReader.result.toString());

          setAbi(JSON.stringify(data.abi, null, 2));
          setByteCode(data.bytecode);

          onChange(data.abi, data.bytecode);
        } catch {
          setAbiError("Invalid file");
        }
      }
    };
    fileReader.readAsText(file);
    return false;
  };

  return (
    <FlexVertical>
      <Row>
        <Col2>
          <Upload.Dragger
            multiple={false}
            beforeUpload={handleBeforeUpload}
            showUploadList={false}
          >
            Upload JSON artifact
          </Upload.Dragger>
        </Col2>
      </Row>
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
    </FlexVertical>
  );
};
