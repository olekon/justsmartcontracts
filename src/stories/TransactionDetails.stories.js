import React from 'react';
import {storiesOf} from '@storybook/react';
import TransactionDetails from '../components/common/TransactionDetails.jsx';
import {withState} from '@dump247/storybook-state';
import sampleData from './data.js';
import {actionExtJson} from './storiesUtils.js';

const sampleTx = {
    from: sampleData.sampleAddresses[0],
    to: sampleData.sampleAddresses[1],
    nonce: '50',
    gas: '200000',
    gasPrice: '1000000000',
    data: '0x12345678900000000000000000000123455678',
    value: '1234500000000'
};
storiesOf('TransactionDetails', module)
    .add('edit mode', withState({tx: sampleTx})(
        ({store}) => (
            <TransactionDetails
                tx={store.state.tx}
                onChange={tx => store.set({tx})}
            />
        ))
    )
    .add('readonly mode', () => (
        <TransactionDetails
            tx={sampleTx}
            readonly={true}
        />
    ))
    .add('edit mode, empty tx', withState({tx: {}})(
        ({store}) => (
            <TransactionDetails
                tx={store.state.tx}
                onChange={tx => store.set({tx})}
            />
        ))
    );