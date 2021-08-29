import React from 'react';
import PropTypes from 'prop-types';
import {Button, List, Card, Modal} from 'antd';
import {DeleteOutlined} from "@ant-design/icons";
import Blockies from 'react-blockies';
import {shortenEthAddress} from '../../scripts/utils.js'
import ContractForm from './ContractForm.jsx';

import styles from './ContractsList.css';

/**
 * List of stored contracts located in the side panel 
 */
class ContractsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            modalConfirmationVisible : false
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
        this.showConfirmationModal = this.showConfirmationModal.bind(this);
        this.closeConfirmationModal = this.closeConfirmationModal.bind(this);
        this.onConfirmedDelete = this.onConfirmedDelete.bind(this);
    }

    showModal() {
        this.setState({
            modalVisible: true,
        });
    }

    closeModal() {
        this.setState({
            modalVisible: false,
        });
    }

    showConfirmationModal() {
        this.setState({
            modalConfirmationVisible: true,
          });
    }

    closeConfirmationModal() {
        this.setState({
            modalConfirmationVisible: false,
        });
    }


    handleAddButton(name, address, networkId, abi) {
        this.closeModal();
        this.props.onAddContract(name, address, networkId, abi);
    }

    handleDeleteButton(e, networkId, name) {
        this.setState ({
            deletingContract : {id:networkId, name:name}
        })
        this.showConfirmationModal();
        e.stopPropagation();
    }

    onConfirmedDelete() {
        this.props.onDeleteContract(this.state.deletingContract.id, this.state.deletingContract.name);
        this.closeConfirmationModal();
    }

    renderTitle(contract) {
        return (
            <>
                {contract.name}
                <Button 
                    type="default"
                    name="deleteButton"                     
                    size="small"
                    style={{ float: "right" }} 
                    onClick={e => this.handleDeleteButton(e, contract.networkId, contract.name)}
                >
                    <DeleteOutlined />
                </Button>
            </>
        )
    }

    render() {
        return (
            <>
                <div>            
                    <Modal
                        visible={this.state.modalVisible}
                        onCancel={this.closeModal}
                        onOk={this.props.onAddContract}
                        footer={null}
                        maskClosable = {false}
                    >
                        <ContractForm onAddContract={this.handleAddButton} />
                    </Modal>
                </div>
                <List>
                    {
                        this.props.contracts.map(
                            contract =>
                                <Card 
                                    size='small' 
                                    onClick={() => this.props.onChangeContract(contract.name)} 
                                    className={this.props.activeContract && this.props.activeContract.address == contract.address ? 
                                        styles.selectedContract : 
                                        ''}
                                    key={contract.address}
                                > 
                                    <Card.Meta
                                        avatar={<Blockies seed={contract.address.toLowerCase()} />}
                                        title={this.renderTitle(contract)}
                                        description={shortenEthAddress(contract.address, 4)}
                                    />
                                </Card>
                        )
                    }
                </List>
                <div>
                <Button type="primary" className={styles.addButton} onClick={this.showModal}>Add contract</Button>
                </div>
                <Modal
                    visible={this.state.modalConfirmationVisible}
                    onOk={this.onConfirmedDelete}
                    onCancel={this.closeConfirmationModal}
                    maskClosable = {false}
                >
                    <p>{'Sure?'}</p>
                </Modal>
            </>
        );
    }
}

ContractsList.propTypes = {
    contracts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContractsList;