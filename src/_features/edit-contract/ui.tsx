import { useCallback, useState } from "react";
import { Modal, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import {
  ContractForm,
  TContract,
  TContractWithoutId,
} from "@entities/contract";
import { useEditContact } from "./model";

type TProps = {
  contract: TContract;
};

export const EditContractButton = ({ contract }: TProps) => {
  const [formVisible, setFormVisible] = useState(false);
  const editContract = useEditContact(contract);

  const showModal = () => setFormVisible(true);
  const hideModal = () => setFormVisible(false);

  const onSubmit = useCallback(
    (values: TContractWithoutId) => {
      hideModal();

      editContract(values);
    },
    [editContract]
  );

  return (
    <>
      <Button size="small" icon={<EditOutlined />} onClick={showModal} />

      <Modal
        title="Edit contract"
        open={formVisible}
        footer={null}
        onCancel={hideModal}
        destroyOnClose
      >
        <ContractForm
          value={contract}
          buttonText="Update"
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  );
};
