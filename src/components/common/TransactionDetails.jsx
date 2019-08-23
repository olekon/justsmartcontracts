import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';
import {fromJS} from 'immutable';
import {getDefaultValue, isEthAddress} from '../../scripts/utils.js';
import AddressInput from './AddressInput.jsx';
import EtherInput from './EtherInput.jsx';

const defaultAddress = getDefaultValue('address');
const defaultEther = getDefaultValue('ether');
const defaultNumber = 0;

/**
 * Form to edit standard transaction fields: from, to, gas, nonce, etc.
 * Props: 
 * tx - standard Ethereum unsigned tx object {from, to, gas, nonce}
 * onChange - event, fires when any of trnasction fields get changed (tx)=>{}
 * readonly - true if edit is not allowed, default: false.  
 */
const TransactionDetails = props => {

    const colLayout = {
        span: 12
    };
    const rowLayout = {
        gutter: 8
    };

    const handleChange = (field, value) => {
        const tx = fromJS(props.tx);
        props.onChange(
            tx.setIn([field], value)
        );
    }

    return (
        <Form>
            <Row {...rowLayout}>
                <Col {...colLayout}><Form.Item label='From Address'>
                    <AddressInput
                        value={props.tx.from || defaultAddress}
                        onChange={(value, isEthAddress) => handleChange('from', value)}
                    />
                </Form.Item></Col>
                <Col {...colLayout}><Form.Item label='Nonce'>
                    <Input
                        value={props.tx.nonce || defaultNumber}
                        onChange={e => handleChange('nonce', e.target.value)}
                    />
                </Form.Item></Col>
            </Row>

            <Row {...rowLayout}>
                <Col {...colLayout}><Form.Item label='To Address'>
                    <AddressInput
                        value={props.tx.to || defaultAddress}
                        onChange={(value, isEthAddress) => handleChange('to', value)}
                    />
                </Form.Item></Col>
                <Col {...colLayout}><Form.Item label='ETH Value'>
                    <EtherInput
                        value={props.tx.value || defaultEther}
                        onChange={value => handleChange('value', value)}
                    />
                </Form.Item></Col>
            </Row>

            <Row {...rowLayout}>
                <Col {...colLayout}><Form.Item label='Gas Price'>
                    <EtherInput
                        value={props.tx.gas || defaultNumber}
                        onChange={value => handleChange('gasPrice', value)}
                    />
                </Form.Item></Col>
                <Col {...colLayout}><Form.Item label='Gas'>
                    <Input
                        value={props.tx.gas || props.tx.gasLimit || defaultNumber}
                        onChange={e => handleChange('gas', e.target.value)}
                    />
                </Form.Item></Col>
            </Row>
            <Form.Item label='Data'>
                <Input.TextArea 
                    rows={5} 
                    value={props.tx.data}
                    onChange={e => handleChange('data', e.target.value)}
                />
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

TransactionDetails.propType = {
    tx: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    readonly: PropTypes.bool
}

TransactionDetails.defaultProps = {
    readonly: false
}

export default TransactionDetails;

