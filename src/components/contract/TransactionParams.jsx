import React from 'react';
import PropTypes from 'prop-types'
import {Form, Button, Input, Radio, Card, Row, Col, Empty, Spin} from 'antd';
import DownloadButton from '../common/DownloadButton.jsx';
import AddressInput from '../common/AddressInput.jsx';
import EtherInput from '../common/EtherInput.jsx';
import * as utils from '../../scripts/utils.js';
import metamask from '../../scripts/metamask.js';
import {showEstimateGasError, showError} from '../common/errorMessage.js';

const onlineMode = 'online';
const offlineMode = 'offline';

/**
 * Transaction parameters block. Displays fields for 'from', 'nonce', etc.
 *  and buttons Sign/Save.
 * Props: 
 * tx - web3 tx object returned by Contract.Method(...) or Contract.deploy(...)
 * ethValue - ETH value to send with method
 * onSign - function that receives Ethereum tx object {from, to, data, value, ...}
 */
class TransactionParams extends React.Component {

    constructor(props) {
        super(props);

        this.currentTxId = null;

        //mode - online/offline
        this.state = {
            mode: onlineMode,
            gasPrice: null,
            fromAddress: '',
            nonce: 0,
            gas: 0,
            error: null
        };

        this.handleSignClick = this.handleSignClick.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleGasPriceChange = this.handleGasPriceChange.bind(this);
        this.handleFromAddressChanged = this.handleFromAddressChanged.bind(this);
        this.handleNonceChange = this.handleNonceChange.bind(this);
        this.handleGasChange = this.handleGasChange.bind(this);
        this.handleMetamaskButton = this.handleMetamaskButton.bind(this)
        this.getDownloadFileName = this.getDownloadFileName.bind(this);
        this.getDownloadFileContent = this.getDownloadFileContent.bind(this);
        this.createUnsignedTx = this.createUnsignedTx.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const id = utils.getMethodId(nextProps.tx);
        if (id !== prevState.prevId) {
            return {
                gas: 0,
                prevId: id,
            }
        }
        return null;
    }

    componentDidMount() {
        //update estimated gas 
        this.loadTxData(utils.getMethodId(this.props.tx));

        //update initial gas price
        this.props.tx._parent.web3.eth.getGasPrice()
            .then(gasPrice => this.setState({gasPrice}))
            .catch(error => this.setState({gasPrice: '0'}));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.gas === 0) {
            this.loadTxData(utils.getMethodId(this.props.tx));
        }
    }

    loadTxData(id) {
        if (utils.isEthAddress(this.state.fromAddress) && id !== this.currentTxId) {
            this.currentTxId = id;

            this.updateGas(this.state.fromAddress);
        }
    }

    componentWillUnmount() {
        this.currentTxId = null;
    }

    updateNonce(address) {
        this.props.tx._parent.web3.eth.getTransactionCount(address)
            .then(nonce => {
                this.setState({nonce});
            });
    }

    updateGas(address) {
        this.props.tx.estimateGas({from: address, value: this.props.ethValue})
            .then(gas => {
                this.setState({gas});
            })
            .catch(error => {
                showEstimateGasError();
                this.setState({gas: 0});
            });
    }

    createUnsignedTx() {
        const toAddress = this.props.tx._parent._address
            ? {to: this.props.tx._parent._address}
            : {};

        return {
            ...{
                from: this.state.fromAddress,
                nonce: utils.toHex(this.state.nonce),
                data: this.props.tx.encodeABI(),
                gasPrice: utils.toHex(this.state.gasPrice),
                gas: utils.toHex(this.state.gas),
                value: utils.toHex(this.props.ethValue || 0),
                chainId: this.props.tx._parent.chainId
            },
            ...toAddress
        };
    }

    getDownloadFileName() {
        return this.props.tx._method.name + '.txt';
    }

    getDownloadFileContent() {
        let tx = this.createUnsignedTx();
        delete tx.chainId;
        return JSON.stringify(tx);
    }

    handleSignClick() {
        if (this.props.onSign) {
            this.props.onSign(this.createUnsignedTx());
        }
    }

    handleGasChange(e) {
        this.setState({
            gas: e.target.value
        });
    }

    handleNonceChange(e) {
        this.setState({
            nonce: e.target.value
        });
    }

    handleFromAddressChanged(value, isEthAddress) {
        this.setState({
            fromAddress: value
        });

        if (isEthAddress) {
            this.updateGas(value);
            this.updateNonce(value);
        } else {
            this.setState({
                nonce: 0,
                gas: 0
            });
        }
    }

    handleGasPriceChange(gasPrice) {
        this.setState({
            gasPrice
        });
    }

    handleModeChange(e) {
        this.setState({
            mode: e.target.value
        });
    }

    handleMetamaskButton() {
        metamask.decrypt()
            .then(fromAddress => {
                this.handleFromAddressChanged(utils.validateEthAddress(fromAddress), true);
            })
            .catch(error => {
                showError(error);
            })
    }



    getForm() {
        const colLayout = {
            span: 12
        };
        const rowLayout = {
            gutter: 8
        };

        return (
            <Form>
                <Form.Item>
                    <Radio.Group defaultValue={onlineMode} buttonStyle='solid' onChange={this.handleModeChange}>
                        <Radio.Button value={onlineMode}>Sign now</Radio.Button>
                        <Radio.Button value={offlineMode}>Sign offline</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Row {...rowLayout}>
                    <Col {...colLayout}><Form.Item label='From Address'>
                        <AddressInput value={this.state.fromAddress} onChange={this.handleFromAddressChanged} />
                        <Button onClick={this.handleMetamaskButton}>Metamask</Button>
                    </Form.Item></Col>
                    <Col {...colLayout}><Form.Item label='Nonce'>
                        <Input onChange={this.handleNonceChange} value={this.state.nonce} />
                    </Form.Item></Col>
                </Row>

                <Row {...rowLayout}>
                    <Col {...colLayout}><Form.Item label='To Address'>
                        <AddressInput value={this.props.tx._parent._address} disabled={true} />
                    </Form.Item></Col>
                    <Col {...colLayout}><Form.Item label='ETH Value'>
                        <Input value={this.props.ethValue} disabled={true} />
                    </Form.Item></Col>
                </Row>

                <Row {...rowLayout}>
                    <Col {...colLayout}><Form.Item label='Gas Price'>
                        {this.state.gasPrice == null
                            ? <Spin></Spin>
                            : <EtherInput value={this.state.gasPrice} defaultMode='gwei' onChange={this.handleGasPriceChange} />
                        }
                    </Form.Item></Col>
                    <Col {...colLayout}><Form.Item label='Gas'>
                        <Input value={this.state.gas} onChange={this.handleGasChange} />
                    </Form.Item></Col>
                </Row>
                <Form.Item label='Data'>
                    <Input.TextArea rows={5} value={this.props.tx.encodeABI()} disabled={false} />
                </Form.Item>
                <Form.Item>
                    <Button
                        disabled={this.state.mode == offlineMode}
                        type='primary'
                        onClick={this.handleSignClick}
                    >
                        Sign
                    </Button>
                    <DownloadButton
                        getContent={this.getDownloadFileContent}
                        getFileName={this.getDownloadFileName}
                    >
                        Download
                    </DownloadButton>
                </Form.Item>
            </Form>
        );
    }

    render() {
        return (
            <Card title='Transaction Details' size='small'>
                {
                    this.getForm()
                }
            </Card>
        );
    }
}

TransactionParams.propTypes = {
    tx: PropTypes.object.isRequired,
    onSign: PropTypes.func
};


export default TransactionParams;