import React from 'react';
import TransactionDetails from '../common/TransactionDetails.jsx';
import ContractInput from '../common/ContractInput.jsx';
import {Button} from 'antd';
import {sign} from '../common/sign.js';
import {unhexTransaction, hexTransaction} from '../../scripts/utils.js';

/**
 * Component can load transaction from file to sign it. 
 * Contains load interface, transaction details and Sign button
 *
 *  Props: 
 * * networkId - web3 provider's network id 
 */
class LoadTransactionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tx: {},
            key: 0, //a key to force rerender of TransactionDetails 
        };
        this.handleTxLoad = this.handleTxLoad.bind(this);
        this.handleTxChange = this.handleTxChange.bind(this);
        this.handleSignButton = this.handleSignButton.bind(this);
    }

    handleTxLoad(tx) {
        //this.setState({tx: unhexTransaction(tx)});
        this.setState((state) => ({tx: unhexTransaction(tx), key: state.key + 1}));
    }

    handleTxChange(tx) {
        this.setState({tx});
    }

    handleSignButton() {
        sign(Object.assign(
            {},
            {...(hexTransaction(this.state.tx))},
            {chainId: this.props.networkId}
        ));
    }

    render() {
        return (
            <>
                <ContractInput
                    text='Select file with an unsigned transaction'
                    accept='.json,.txt'
                    onLoad={this.handleTxLoad}
                />
                <TransactionDetails
                    tx={this.state.tx}
                    key={this.state.key}
                    onChange={this.handleTxChange}
                />
                <Button onClick={this.handleSignButton}>Sign</Button>
            </>
        );
    }
}

export default LoadTransactionView;

