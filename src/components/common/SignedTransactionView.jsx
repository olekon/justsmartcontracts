import React from 'react';
import PropTypes from 'prop-types';
import {unsignTransaction} from '../../scripts/utils.js';

/**
 * Renders signed transaction properties.
 * Props:
 * signedTx - signed transaction, optionally prefixed with 0x. String
 */
const SignedTransasctionView = props => {    

    const tx = unsignTransaction(props.signedTx);
    return (
        <div>
            {JSON.stringify(tx, null, '\t')}
        </div>
    );
};

SignedTransasctionView.propTypes = {
    signedTx: PropTypes.string.isRequired
};

export default SignedTransasctionView;

