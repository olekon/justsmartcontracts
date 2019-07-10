import React from 'react';
import {Layout, Tabs, Menu, Row, Col} from 'antd';
import ContractBrowser from '../contract/ContractBrowser.jsx';
import Deploy from '../contract/Deploy.jsx';
import NetworkSelect from '../settings/NetworkSelect.jsx';
import * as contractLogic from '../../scripts/contractLogic.js';

import * as nodeLogic from '../../scripts/nodeLogic.js';
import config from '../../../config.js';
import {gridConfig} from '../layout.js';

class Center extends React.Component {
    constructor(props) {
        super(props);
        let nodeList = nodeLogic.getNetworkList();
        let initialNodeKey = nodeLogic.getInitialNodeKey();

        this.state = {
            nodeList: nodeList,
            activeNodeKey: initialNodeKey,
            activeMenuKey: 'browser'
        }

        this.changeNode = this.changeNode.bind(this);
        this.deleteNode = this.deleteNode.bind(this);
        this.addCustomNode = this.addCustomNode.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.editCustomNode = this.editCustomNode.bind(this);
    }

    changeNode(nodeKey) {
        nodeLogic.saveActiveNode(nodeKey);
        this.setState({
            activeNodeKey: nodeKey
        });

        const networkId = nodeLogic.getNetworkId(nodeKey);
        let contractList = contractLogic.getContractList(); 
        let contracts = contractList.filter(contract=>contract.networkId === networkId);

      
        const activeContract = contracts.length > 0 ? contracts[0] : null;
        contractLogic.saveActiveContract(activeContract);
        
    }

    handleMenuClick(e) {
        this.setState({
            activeMenuKey: e.key,
        });
    }

    deleteNode(nodeKey) {
        //TODO подтверждение
        let newNodeList = nodeLogic.deleteCustomNode(this.state.nodeList, nodeKey);
        this.setState({
            nodeList: newNodeList,
        })
        if (nodeKey == this.state.activeNodeKey) {
            this.changeNode(config.network.defaultNodeKey);
        }
    }

    editCustomNode(nodeKey, nodeName, endpoint, networkId) {
        let newNodeList = nodeLogic.editCustomNode(this.state.nodeList, nodeKey, nodeName, endpoint, networkId);
        this.setState({
            nodeList: newNodeList,
        })
    }

    /**adds new network to list */
    addCustomNode(nodeName, endpoint, networkId) {
        let newNodeList = nodeLogic.addCustomNode(this.state.nodeList, nodeName, endpoint, networkId);
        this.setState({
            nodeList: newNodeList,
        })
        this.changeNode(nodeLogic.getCustomNodeKey(nodeName));
    }

    getNodeInfo(nodeKey) {
        let network = this.state.nodeList.find(network => network.nodes.find(node => node.key === nodeKey) != undefined);
        let node = network.nodes.find(node => node.key === nodeKey);
        return ({
            networkId: node.id,
            endpoint: node.endpoint
        });
    }

    render() {
        const node = this.getNodeInfo(this.state.activeNodeKey);
        return (
            <>
                <Row>
                    <Col span={gridConfig.NetworkSelectSpan}>
                        <NetworkSelect
                            activeNodeKey={this.state.activeNodeKey}
                            nodeList={this.state.nodeList}
                            onChangeActiveNode={this.changeNode}
                            onDeleteNode={this.deleteNode}
                            onAddNewNode={this.addCustomNode}
                            onEditNode={this.editCustomNode}
                        />
                    </Col>
                    <Col offset={gridConfig.NetworkSelectSpan}>
                        <Menu
                            onClick={this.handleMenuClick}
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={["browser"]}
                        >
                            <Menu.Item key="browser"> Browser </Menu.Item>
                            <Menu.Item key="deploy">Deploy</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <div>
                    {this.state.activeMenuKey === "browser" ? <ContractBrowser
                        networkId={node.networkId}
                        endpoint={node.endpoint}
                        visible={this.state.activeMenuKey === "browser"}
                    /> : null
                    }
                    {this.state.activeMenuKey === "deploy" ? <Deploy
                        networkId={node.networkId}
                        endpoint={node.endpoint}
                    /> : null
                    }
                </div>
            </>
        );
    }
}

export default Center;