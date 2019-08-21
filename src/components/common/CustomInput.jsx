import React from 'react';
import PropTypes from 'prop-types';
import BoolInput from './BoolInput.jsx';
import AddressInput from './AddressInput.jsx';
import EtherInput from './EtherInput.jsx';
import ArrayInput from './ArrayInput.jsx';
import {Input} from 'antd';
import {isArrayType, getArrayItemType} from '../../scripts/utils.js';

/**
 * Input of specified type. One of BoolInput, AddressInput, EtherInput, Input.
 * Props: 
 * type - type of input value: for example 'bool', 'address', 'eth'/'ether', 'uint256',
 * onChange - triggers on value change (newValue)=>{}
 * value - displayed value
 */

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const {type, onChange, ...restProps} = this.props;

        switch (type) {
            case 'bool':
                return <BoolInput onChange={onChange} {...restProps} />
            case 'address':
                return <AddressInput onChange={onChange} {...restProps} />
            case 'eth':
            case 'ether':
                return <EtherInput onChange={onChange} {...restProps} />
            default:
                if (isArrayType(type)) {
                    return (<ArrayInput type={getArrayItemType(type)} onChange={onChange} {...restProps} />);
                } else {
                    return <Input autoComplete='off' onChange={this.onInputChange} {...restProps} />
                }
        }
    }
}


CustomInput.propTypes = {
    type: PropTypes.string.isRequired
};

CustomInput.defaultProps = {
    type: ''
};

export default CustomInput;