import { useCallback, useState } from "react";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { contractModel } from "@entities/contract";
import { ContractForm } from "./ContractForm";

export const AddContractButton = () => {
  const [formVisible, setFormVisible] = useState(false);
  const { add, setCurrent } = contractModel.useContracts();

  const showModal = () => setFormVisible(true);
  const hideModal = () => setFormVisible(false);

  const onSubmit = useCallback(
    (values: contractModel.TContract) => {
      hideModal();

      const { id } = add(values.chain, values.address, values.name, values.abi);
      setCurrent(id);
    },
    [add, setCurrent]
  );

  return (
    <>
      <Button icon={<PlusOutlined />} onClick={showModal}>
        Add contract
      </Button>

      <Modal
        title="Add new contract"
        open={formVisible}
        footer={null}
        onCancel={hideModal}
        destroyOnClose
      >
        <ContractForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
};
