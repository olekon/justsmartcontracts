import React from 'react';
import TransactionDetails from '../common/TransactionDetails.jsx';
import {Button, Input} from 'antd';
import {unsignTransaction, unhexTransaction} from '../../scripts/utils.js';

/** 
 * Component that takes signed transaction in form of string and broadcast it to the network
 * Contains input box, transaction details and Send button
 * 
 * Props:
 * * networkId - network where the transaction will be sent to  
 */
class BroadcastTransactionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedTx: '',
        };

        this.handleSignedTxChange = this.handleSignedTxChange.bind(this);
        this.handleSendButton = this.handleSendButton.bind(this);
    }

    handleSignedTxChange(e) {
        this.setState({signedTx: e.target.value});
    }

    handleSendButton() {
        console.log(this.state.signedTx);
    }

    render() {
        const unsignedTx = unhexTransaction(unsignTransaction(this.state.signedTx)).tx;
        return (
            <>
                <Input.TextArea
                    rows={6}
                    value={this.state.signedTx}
                    onChange={this.handleSignedTxChange}
                    placeholder='Input signed transaction'
                />
                <TransactionDetails
                    readonly={true}
                    tx={unsignedTx}
                />
                <Button onClick={this.handleSendButton}>Send</Button>
            </>
        );
    }
}

export default BroadcastTransactionView;

