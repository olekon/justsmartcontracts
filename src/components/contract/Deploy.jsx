import React from 'react';
import {Layout, Row, Col, Input} from 'antd';
import TransactionParams from './TransactionParams.jsx';
import FunctionInputs from '../common/FunctionInputs.jsx';
import ContractInput from '../common/ContractInput.jsx';
import {sign} from '../common/sign.js';

import Web3Provider from '../../scripts/web3provider.js';

/**
 * Deploy interface. Props:
 * networkId - web3 provider's network id 
 * endpoint - web3 provider's endpoint url
 */
class Deploy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            abi: '',
            bytecode: '',
            tx: null,
            ethValue: null
        };

        this.handleFileLoad = this.handleFileLoad.bind(this);
        this.handleAbiChange = this.handleAbiChange.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleInputsClick = this.handleInputsClick.bind(this);
    }

    handleInputsClick(inputs, ethValue) {
        const web3Provider = new Web3Provider(this.props.endpoint, this.props.networkId);
        const contract = web3Provider.getContract(JSON.parse(this.state.abi));

        this.setState({
            ethValue: ethValue,
            tx: contract.deploy({
                data: this.state.bytecode,
                arguments: inputs
            })
        });
    }

    handleAbiChange(e) {
        this.setState({
            abi: e.target.value
        });
    }

    handleCodeChange(e) {
        this.setState({
            bytecode: e.target.value
        });
    }

    handleFileLoad(truffleObject) {
        this.setState({
            abi: JSON.stringify(truffleObject.abi, null, '\t'),
            bytecode: truffleObject.bytecode
        });
    }

    //tries to extract constructor from abi and create function inputs component
    createFunctionInputs() {
        try {
            const abi = JSON.parse(this.state.abi);
            const ctor = abi.find(item => item.type == 'constructor');

            return <FunctionInputs
                inputs={ctor ? ctor.inputs : []}
                ethInput={ctor ? ctor.payable : false}
                button='Generate'
                onClick={this.handleInputsClick}
            />
        } catch (e) {
            //in case 'abi' is not a json return null
            return null;
        }
    }

    createTransactionParams() {
        return this.state.tx
            ? <TransactionParams
                tx={this.state.tx}
                ethValue={this.state.ethValue}
                onSign={tx => sign(tx)}
            />
            : null;
    }

    render() {
        const functionInputs = this.createFunctionInputs();
        const transactionParams = this.createTransactionParams();

        return (
            <>
                <Row gutter={8}>
                    <Col span={12}>
                        <Input.TextArea
                            rows={16}
                            placeholder='Byte code'
                            value={this.state.bytecode}
                            onChange={this.handleCodeChange}
                        />
                    </Col>
                    <Col span={12}>
                        <Input.TextArea
                            rows={16}
                            placeholder='ABI/JSON Interface'
                            value={this.state.abi}
                            onChange={this.handleAbiChange}
                        />
                    </Col>
                </Row>
                <ContractInput
                    text='Select truffle-compiled file'
                    onLoad={this.handleFileLoad}
                />
                {functionInputs}
                {transactionParams}
            </>
        );
    }
}

export default Deploy;