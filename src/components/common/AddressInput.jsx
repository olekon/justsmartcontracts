import React from 'react';
import PropTypes from 'prop-types';
import {Input, Icon} from 'antd';
import * as utils from '../../scripts/utils.js';
import Blockies from 'react-blockies';

/**
 * Input for entering an Ethereum address. Validates and checksums its value.
 * Props:
 * value - value to display
 * onChange - (value, isEthAddress) => {} handler function, fires upon input content change
 *         value - inputed text, isEthAddress - true if it's valid, false - if invalid or incomplete
 *  ... any <Input> props 
 */
class AddressInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const isEthAddress = utils.isEthAddress(e.target.value);
        const value = isEthAddress
            ? utils.validateEthAddress(e.target.value)
            : e.target.value;

        if (this.props.onChange) {
            this.props.onChange(value, isEthAddress);
        }
    }


    render() {
        const {value, onChange, addonBefore, ...restProps} = this.props;
        const icon = utils.isEthAddress(this.props.value)
            ? (<Blockies seed={this.props.value.toLowerCase()} size={7} scale={3} />)
            : (<Icon type='minus-square'></Icon>);

        return (
            <Input
                {...restProps}
                value={this.props.value}
                onChange={this.handleChange}
                addonBefore={icon}
                autoComplete='off'
            />
        );
    }
}


AddressInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};


export default AddressInput;

