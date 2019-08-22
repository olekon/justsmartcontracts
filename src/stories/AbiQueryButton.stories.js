import React from 'react'
import {storiesOf} from '@storybook/react';
import {actionExtJson} from './storiesUtils.js';
import AbiQueryButton from '../components/common/AbiQueryButton.jsx';

const bnbAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';

storiesOf('AbiQueryButton', module)
    .add('Mainnet BNB Coin', () => (
        <AbiQueryButton
            getOptions={() => ({address: bnbAddress, networkId: 1})}
            //onResponse={actionExtJson('AbiQueryButton BNB Coin')}
            onResponse={response=>alert(response.result)}
        >
            ABI of {bnbAddress}
            </AbiQueryButton>
    )
    );