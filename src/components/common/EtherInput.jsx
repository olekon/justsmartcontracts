import React from 'react';
import PropTypes from 'prop-types';
import {Input, Select} from 'antd';
import {convertFromWei, convertToWei} from '../../scripts/utils.js';

const modeWei = 'wei';
const modeGwei = 'gwei';
const modeEth = 'ether';


/**
 * Input field for entering ether amount. 
 * 
 * Props:
 * * value - initial value to display in wei
 * * onChange - event handler that receives ether value in wei (eth)=>{}
 * * defaultMode - mode for initial state: 'ether'/'gwei'/'wei'/
 * 
 * **Notes**:
 * This component has internal state that prevents it from turning into fully controlled.
 * If new value is provided in props, it should be re-rendered. 
 * Simplest way is to provide new 'key' field for this component or its parent 
 */
class EtherInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: convertFromWei(this.props.value, this.props.defaultMode) || '0',
            mode: this.props.defaultMode
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
    }

    getRegExp() {
        //only integer numbers fow 'wei'
        return this.state.mode == modeWei ? /^\d+$/
            //limit to 9 decimals for 'gwei'
            : this.state.mode == modeGwei ? /^(\d+\.?\d{0,9}|\.\d{1,9})$/
                //limit to 18 decimals for 'ether'
                : /^(\d+\.?\d{0,18}|\.\d{1,18})$/;
    }

    handleValueChange(e) {
        const reg = this.getRegExp();
        const value = e.target.value;

        if ((!Number.isNaN(value) && reg.test(value)) || value === '') {
            this.setState({value});
            this.props.onChange(convertToWei(
                value === '' ? '0' : value,
                this.state.mode
            ));
        }
    }

    handleModeChange(mode) {
        //convert stored value from old mode to new mode
        const weis = convertToWei(this.state.value, this.state.mode);
        const value = convertFromWei(weis, mode);
        this.setState({mode, value});
    }

    render() {
        const {value, onChange, addonAfter, defaultMode, ...restProps} = this.props;
        const selectAfter = (
            <Select defaultValue={this.state.mode} onSelect={this.handleModeChange}>
                <Select.Option value={modeWei}>{modeWei}</Select.Option>
                <Select.Option value={modeGwei}>{modeGwei}</Select.Option>
                <Select.Option value={modeEth}>{modeEth}</Select.Option>
            </Select>
        );
        return (
            <Input
                value={this.state.value}
                onChange={this.handleValueChange}
                addonAfter={selectAfter}
                autoComplete='off'
                {...restProps}
            />
        );
    }
}

EtherInput.propTypes = {
    onChange: PropTypes.func,
    defaultMode: PropTypes.oneOf([modeWei, modeGwei, modeEth])
};

EtherInput.defaultProps = {
    value: '0',
    defaultMode: modeWei
};

export default EtherInput;