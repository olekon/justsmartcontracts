import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import Blockies from 'react-blockies';
import {convertFromWei} from '../../scripts/utils.js';

/**
 * Formats Solidity variable value depending on its type. 
 * Props:
 * type - Solidity type
 * value - parameter value
 * mode - for uint256 type: raw(default) - display 'as-is', e18 - divide by 1E18. Otherwise ignored. 
 */
class FormattedValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        switch (this.props.type) {
            case 'bool':
                return (
                    <>                    
                        <Icon type={this.props.value ? 'check' : 'close'} />
                        <span>{this.props.value ? 'True' : 'False'}</span>
                    </>
                );
            case 'address':
                return (
                    <>
                        <Blockies seed={this.props.value.toLowerCase()} size={8} scale={2} />
                        {this.props.value.toString()}
                    </>
                );
            case 'uint256':
                return (
                    <>
                        {this.props.mode == 'e18'
                            ? convertFromWei(this.props.value.toString(), 'ether')
                            : this.props.value.toString()
                        }
                    </>
                )
            default:
                return (
                    <>
                        {this.props.value.toString()}
                    </>
                );
        }
    }
}

FormattedValue.propTypes = {
    type: PropTypes.string,
    mode: PropTypes.oneOf(['raw', 'e18']),
};

export default FormattedValue;