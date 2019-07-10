import React from 'react';
import {Button, Modal} from 'antd';

import NodeForm from './NodeForm.jsx';
import {Popconfirm, TreeSelect} from 'antd';
const TreeNode = TreeSelect.TreeNode;

const addNewNodeKey = 'addNode';
import * as nodeLogic from '../../scripts/nodeLogic.js';
import * as message from '../common/errorMessage.js';

import styles from './NetworkSelect.css';

/**
 * List of stored endpoints  
 * Props:
 *      activeNodeKey 
 *      nodeList
 *      onChangeActiveNode
 *      onAddNewNode     
 */
class NetworkSelect extends React.Component {
    constructor(props) {
        super(props);
        let info = this.getNodeInfo(this.props.activeNodeKey);
        this.state = {
            modalNodeFormVisible : false,
            modalConfirmationVisible : false
        }

        this.handleTreeNodeClick = this.handleTreeNodeClick.bind(this);
        this.deleteNode = this.deleteNode.bind(this);
        this.showNodeFormModal = this.showNodeFormModal.bind(this);
        this.closeNodeFormModal = this.closeNodeFormModal.bind(this);
        this.showConfirmationModal = this.showConfirmationModal.bind(this);
        this.closeConfirmationModal = this.closeConfirmationModal.bind(this);
        this.onConfirmedDelete = this.onConfirmedDelete.bind(this);
        this.onAddNewNode = this.onAddNewNode.bind(this);
        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.onEditNode = this.onEditNode.bind(this);
    }

     /**changes active network*/
     handleTreeNodeClick(nodeKey, label, extra) {
        if(nodeKey == addNewNodeKey) {
            this.setState({selectedNode : null, onHandleAction : this.onAddNewNode})
            this.showNodeFormModal();
        } else {
            this.props.onChangeActiveNode(nodeKey);
        }
    }

    handleEditButtonClick(e, nodeKey) {
        this.setState({selectedNode : nodeKey, onHandleAction : this.onEditNode})
        this.showNodeFormModal();
        e.stopPropagation();
    }

    onAddNewNode(name, endpoint, id) {
        if (nodeLogic.existCustomNode(this.props.nodeList, name)) {
            message.showNodeExist();
        } else {
            this.closeNodeFormModal();
            this.props.onAddNewNode(name, endpoint, id);
        }
    }

    deleteNode(e, nodeKey) {
        this.setState({selectedNode : nodeKey});
        this.showConfirmationModal();
        e.stopPropagation();
    }

    onConfirmedDelete() {
        this.props.onDeleteNode(this.state.selectedNode);
        this.closeConfirmationModal();
    }

    onEditNode(name, endpoint, id) {
        if (!nodeLogic.checkEditPossible(this.props.nodeList, this.state.selectedNode, name)) {
            message.showNodeExist();
        } else {
            this.closeNodeFormModal();
            this.props.onEditNode(this.state.selectedNode, name, endpoint, id);
        }
    }

    getNodeInfo(nodeKey) {
        let network = this.props.nodeList.find(network=>network.nodes.find(node=>node.key === nodeKey)!=undefined);
        let node = network.nodes.find(node=>node.key === nodeKey);
        return({
            info: network.type + '.' + node.name
          });
    }

    showNodeFormModal() {
        this.setState({
            modalNodeFormVisible: true,
          });
    }

    closeNodeFormModal() {
        this.setState({
            modalNodeFormVisible: false,
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

    renderTitle(text, nodeKey) {
        return (
            <>
                {text}
                <Button 
                    type="default"
                    name="deleteButton" 
                    icon="delete"
                    size="small"
                    style={{ float: "right" }} 
                    onClick={e => this.deleteNode(e, nodeKey)}
                />
                <Button 
                    type="default" 
                    icon="edit"
                    size="small"
                    style={{ float: "right" }} 
                    onClick={e => this.handleEditButtonClick(e, nodeKey)}/>
                </>
        )
    }

    render() {
        return (
            <>
            <TreeSelect
                showSearch         
                value={this.getNodeInfo(this.props.activeNodeKey).info}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                treeDefaultExpandAll
                onChange={this.handleTreeNodeClick}
                className={styles.collapsedBox}
            >
                {this.props.nodeList.map(network => (
                    <TreeNode selectable={false} title={network.type} key={network.type} value={network.type}>
                    {
                        //TODO вынести куда-то константу для это типа, как вариант файл константы и енум для типов сетей
                        network.type === "My networks" ?
                            network.nodes.map(node => 
                                <TreeNode value={node.key} title={this.renderTitle(node.name, node.key)} key={node.key}/>
                            ) :
                            network.nodes.map(node => 
                                <TreeNode value={node.key} title={node.name} key={node.key}/>
                            )
                    }
                    </TreeNode>
                ))}
                <TreeNode title={"Add custom node"} key={addNewNodeKey} value={addNewNodeKey} />   
            </TreeSelect>
        
            <Modal
                visible={this.state.modalNodeFormVisible}
                onOk={this.closeNodeFormModal}
                onCancel={this.closeNodeFormModal}
                footer = {null}
                maskClosable = {false}
            >
                <NodeForm nodeList={this.props.nodeList} nodeKey={this.state.selectedNode} onSubmit={this.state.onHandleAction}/>  
            </Modal>

            <Modal
                visible={this.state.modalConfirmationVisible}
                onOk={this.onConfirmedDelete}
                onCancel={this.closeConfirmationModal}
                maskClosable = {false}
            >
                <p>{'Sure?'}</p>
            </Modal>
            </>
        )
    }
}

/*
NetworkSelect.propTypes = {
    web3Provider: PropTypes.object.isRequired
}*/

export default NetworkSelect;