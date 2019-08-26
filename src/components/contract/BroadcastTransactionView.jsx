import React from 'react';
import TransactionDetails from '../common/TransactionDetails.jsx';
import {Button, Input} from 'antd';
import {unsignTransaction, unhexTransaction} from '../../scripts/utils.js';
import {showArgumentsError, showTransactionSent} from '../common/errorMessage.js';
import Web3Provider from '../../scripts/web3provider.js';

/** 
 * Component that takes signed transaction in form of string and broadcast it to the network
 * Contains input box, transaction details and Send button
 * 
 * Props:
 * * networkId - id of the network where the transaction will be sent to  
 * * endpoint - endpoint to send transaction to
 */
class BroadcastTransactionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedTx: '',
            key: 0, //a key to force rerender of TransactionDetails 
        };

        this.handleSignedTxChange = this.handleSignedTxChange.bind(this);
        this.handleSendButton = this.handleSendButton.bind(this);
    }

    handleSignedTxChange(e) {
        //this.setState({signedTx: e.target.value});
        const signedTx = e.target.value;
        this.setState((state) => ({signedTx: signedTx, key: state.key + 1}));
    }

    handleSendButton() {
        const web3Provider = new Web3Provider(this.props.endpoint, this.props.networkId);
        web3Provider.sendSignedTx(
            this.state.signedTx.startsWith('0x') ? this.state.signedTx : `0x${this.state.signedTx}`
        )
            .on('transactionHash', txHash => {
                showTransactionSent(this.props.networkId, txHash);
            })
            .on('error', error => {
                showArgumentsError(error.toString());
            })
            .catch(error => {
                showArgumentsError(error.message);
            });
    }

    render() {
        const unsignedTx = unhexTransaction(unsignTransaction(this.state.signedTx).tx);
        return (
            <>
                <Input.TextArea
                    rows={6}
                    value={this.state.signedTx}
                    onChange={this.handleSignedTxChange}
                    placeholder='Input a signed transaction optionally prefixed with 0x'
                />
                <TransactionDetails
                    readonly={true}
                    tx={unsignedTx}
                    key={this.state.key}
                />
                <Button onClick={this.handleSendButton}>Send</Button>
            </>
        );
    }
}

export default BroadcastTransactionView;

