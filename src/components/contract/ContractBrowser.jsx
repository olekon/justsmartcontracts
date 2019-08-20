import React from 'react';
import {Row, Col} from 'antd';

import ContractView from './ContractView.jsx';
import ContractList from './ContractsList.jsx';
import ErrorBoundary from '../base/ErrorBoundary.jsx';

import Web3Provider from '../../scripts/web3provider.js';
import * as contractLogic from '../../scripts/contractLogic.js';

import {gridConfig} from '../layout.js';
import * as message from '../common/errorMessage.js';


/**
 * Renders stored contracts in side panel with selected contract in content panel
 * Props :
 *  networkId
 *  endpoint
 */
class ContractBrowser extends React.Component {
    constructor(props) {
        super(props);
        let contractList = contractLogic.getContractList(); 
        this.state = {
            contractList    : contractList, 
            activeContract  : contractLogic.getInitialContract(contractList)
        }
        this.changeContract = this.changeContract.bind(this);
        this.addContract = this.addContract.bind(this);
        this.deleteContract = this.deleteContract.bind(this);
    }

    changeContract(name)
    {
        let newActiveContract = contractLogic.getContract(this.state.contractList, name, this.props.networkId);
        this.setState({
            activeContract: newActiveContract
        })
        contractLogic.saveActiveContract(newActiveContract);
    }

    addContract(name, address, networkId, abi) {
        if(contractLogic.existContract(this.state.contractList, name, networkId)) {
            message.showContractExist();
        } else {
            let contractList = contractLogic.addContract(this.state.contractList, name, address, networkId, abi);
            this.setState({
                contractList: contractList
            })
        }
    }

    deleteContract(networkId, name) {
        let contract = contractLogic.getContract(this.state.contractList, name, networkId); 
        let isDeletingActive = contract === this.state.activeContract;
        let contractList = contractLogic.deleteContract(this.state.contractList, contract);

        let newActiveContract = {};
        if(isDeletingActive) {
            contract =  contractLogic.getFirstContract(contractList, this.state.prevNetworkId);
            newActiveContract = {activeContract: contract}
            contractLogic.saveActiveContract(contract);
        }

        let data = {
                ...{contractList: contractList},
                ...newActiveContract
        }
        this.setState(data);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let data = {};
        if (nextProps.endpoint !== prevState.prevEndpoint) {
            data.prevEndpoint = nextProps.endpoint;
            data.web3Provider = new Web3Provider(nextProps.endpoint, nextProps.networkId);
        } 
        if (nextProps.networkId !== prevState.prevNetworkId) {
            let contracts = prevState.contractList.filter(contract=>contract.networkId === nextProps.networkId);
            if(prevState.prevNetworkId) {
                data.activeContract = contracts.length > 0 ? contracts[0] : undefined;
            }
            data.prevNetworkId = nextProps.networkId;
        }
        return data;
    }

    render() {   
        return (
            <Row>
                <Col span={gridConfig.ContractListSpan}>             
                    <ContractList 
                        contracts={this.state.contractList.filter(contract=>contract.networkId===this.props.networkId)} 
                        web3Provider={this.state.web3Provider} 
                        onChangeContract = {this.changeContract}
                        onAddContract ={this.addContract}
                        onDeleteContract = {this.deleteContract}
                        activeContract = {this.state.activeContract}
                    />
                </Col>
                
                <Col span={gridConfig.ContractViewSpan}>
                    <ErrorBoundary>
                    <ContractView 
                        web3Provider={this.state.web3Provider} 
                        contract={this.state.activeContract} 
                        key={this.state.activeContract ? this.state.activeContract.address : 'empty'}
                    />
                    </ErrorBoundary>
                </Col>
            </Row>
        );
    }
}


export default ContractBrowser;