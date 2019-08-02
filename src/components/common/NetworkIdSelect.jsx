import React from 'react';
import PropTypes from 'prop-types';
import {Select, Input} from 'antd';

const {Option} = Select;
/**
 * Input for Ethereum network id, a list of preordered ids and field for manual input
 * Props:
 *  value - value to display: 1/3/ etc.
 *  onChange - function (value) => (). Id change event handler
 */
class NetworkIdSelect extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            inputEnabled: this.isCustomId(this.props.value),
        };
        this.handleIdSelect = this.handleIdSelect.bind(this);
        this.handleIdInput = this.handleIdInput.bind(this);
    }    

    handleIdSelect(id) {        
        this.setState({
            inputEnabled: this.isCustomId(id)
        });
        this.props.onChange(id);
    }

    handleIdInput(e) {
        const reg = /^\d+$/;
        if(reg.test(e.target.value)) {
            this.props.onChange(e.target.value);
        }
    }

    isCustomId(id) {
        return id != '1' && id != '3' && id != '4' && id != '5' && id != '42';
    }

    render() {
        const selectedValue = this.isCustomId(this.props.value) ? '0' : this.props.value;
        const selectAfter = (
            <Select
                defaultValue = {selectedValue}
                onSelect = {this.handleIdSelect}
            >
                <Option value='1'>Mainnet</Option>
                <Option value='3'>Ropsten</Option>
                <Option value='4'>Rinkeby</Option>
                <Option value='5'>Goerli</Option>
                <Option value='42'>Kovan</Option>
                <Option value='0'>Custom</Option>
            </Select>
        );

        return (
            <Input
                onChange={this.handleIdInput}
                addonAfter={selectAfter}
                value={this.props.value}
                disabled={!this.state.inputEnabled}
            > 
            </Input>
        );
    }
}


NetworkIdSelect.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};


export default NetworkIdSelect;

