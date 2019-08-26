import React from 'react';
import PropTypes from 'prop-types';
import {Form, Row, Col, Input} from 'antd';
import {fromJS} from 'immutable';
import {getDefaultValue} from '../../scripts/utils.js';
import AddressInput from './AddressInput.jsx';
import EtherInput from './EtherInput.jsx';

const defaultAddress = getDefaultValue('address');
const defaultEther = getDefaultValue('ether');
const defaultNumber = '0';

/**
 * Form to edit standard transaction fields: from, to, gas, nonce, etc.
 * Props: 
 * tx - standard Ethereum unsigned tx object {from, to, gas, nonce}. Numbers should be 10-base strings or numbers
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
        if (props.onChange) {
            props.onChange(
                tx.setIn([field], value).toJS()
            );
        }
    }

    const handleIntFieldChange = (field, value) => {
        const intRegexp = /^\d+$/;
        if(intRegexp.test(value)) {
            handleChange(field, value);
        }
    }
    
    const value = (props.tx.value || defaultEther).toString();
    const gasPrice = (props.tx.gasPrice || defaultNumber).toString();

    return (        
        <Form>
            <Row {...rowLayout}>
                <Col {...colLayout}><Form.Item label='From Address'>
                    <AddressInput
                        value={props.tx.from || defaultAddress}
                        onChange={(value, isEthAddress) => handleChange('from', value)}
                        disabled={props.readonly}
                    />
                </Form.Item></Col>
                <Col {...colLayout}><Form.Item label='Nonce'>
                    <Input
                        value={props.tx.nonce || defaultNumber}
                        onChange={e => handleIntFieldChange('nonce', e.target.value)}
                        disabled={props.readonly}
                    />
                </Form.Item></Col>
            </Row>

            <Row {...rowLayout}>
                <Col {...colLayout}><Form.Item label='To Address'>
                    <AddressInput
                        value={props.tx.to || defaultAddress}
                        onChange={(value, isEthAddress) => handleChange('to', value)}
                        disabled={props.readonly}
                    />
                </Form.Item></Col>
                <Col {...colLayout}><Form.Item label='ETH Value'>
                    <EtherInput
                        value={value}
                        onChange={value => handleChange('value', value)}
                        disabled={props.readonly}
                    />
                </Form.Item></Col>
            </Row>

            <Row {...rowLayout}>
                <Col {...colLayout}><Form.Item label='Gas Price'>
                    <EtherInput
                        value={gasPrice}
                        onChange={value => handleChange('gasPrice', value)}
                        disabled={props.readonly}
                        defaultMode='gwei'
                    />
                </Form.Item></Col>
                <Col {...colLayout}><Form.Item label='Gas'>
                    <Input
                        value={props.tx.gas || props.tx.gasLimit || defaultNumber}
                        onChange={e => handleIntFieldChange('gas', e.target.value)}
                        disabled={props.readonly}
                    />
                </Form.Item></Col>
            </Row>
            <Form.Item label='Data'>
                <Input.TextArea
                    rows={5}
                    value={props.tx.data}
                    onChange={e => handleChange('data', e.target.value)}
                    disabled={props.readonly}
                />
            </Form.Item>
        </Form>
    );
}

TransactionDetails.propType = {
    tx: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    readonly: PropTypes.bool
}

TransactionDetails.defaultProps = {
    readonly: false
}

export default TransactionDetails;

