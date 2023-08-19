import { useCallback, useState } from "react";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ContractForm, TContractWithoutId } from "@entities/contract";
import { useAddContact } from "./model";

export const AddContractButton = () => {
  const [formVisible, setFormVisible] = useState(false);
  const addContract = useAddContact();

  const showModal = () => setFormVisible(true);
  const hideModal = () => setFormVisible(false);

  const onSubmit = useCallback(
    (values: TContractWithoutId) => {
      hideModal();

      addContract(values);
    },
    [addContract]
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
        <ContractForm buttonText="Add" onSubmit={onSubmit} />
      </Modal>
    </>
  );
};
