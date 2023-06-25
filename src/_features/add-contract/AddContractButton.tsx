"use client";

import { useCallback, useState } from "react";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ContractForm } from "./ContractForm";

export const AddContractButton = () => {
  const [formVisible, setFormVisible] = useState(false);

  const onSubmit = useCallback((values: any) => {
    setFormVisible(false);
    console.log(values);
  }, []);

  return (
    <>
      <Button icon={<PlusOutlined />} onClick={() => setFormVisible(true)}>
        Add contract
      </Button>
      <Modal closable open={formVisible}>
        <ContractForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
};
