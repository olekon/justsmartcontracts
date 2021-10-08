import React from 'react';
import PropTypes from 'prop-types';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Blockies from 'react-blockies';
import { convertFromWei } from '../../scripts/utils.js';
import styles from "./FormattedValue.scss";
import classnames from "classnames";

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
                    <div className={styles.boolLabel}>
                        {this.props.value ? (
                            <CheckOutlined />
                        ) : (
                            <CloseOutlined />
                        )}
                        <span className={styles.right}>{this.props.value ? 'True' : 'False'}</span>
                    </div>
                );
            case 'address':
                return (
                    <div className={styles.addressLabel}>
                        <Blockies
                            seed={this.props.value.toLowerCase()}
                            size={8}
                            scale={2}
                        />
                        <span className={styles.right}>{this.props.value.toString()}</span>
                    </div>
                );
            case 'uint256':
                return (
                    <>
                        {this.props.mode == 'e18'
                            ? convertFromWei(
                                  this.props.value.toString(),
                                  'ether'
                              )
                            : this.props.value.toString()}
                    </>
                );
            default:
                return <>{this.props.value.toString()}</>;
        }
    }
}

FormattedValue.propTypes = {
    type: PropTypes.string,
    mode: PropTypes.oneOf(['raw', 'e18']),
};

export default FormattedValue;
