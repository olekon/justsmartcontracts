import React from 'react'
import { storiesOf } from '@storybook/react';
import { actionExtJson } from './storiesUtils.js';
import EtherscanLink from '../components/common/EtherscanLink.jsx';

storiesOf('EtherscanLink', module)
    .add('tx hash', () => (
        <div>
            <div>
                <p>Ropsten</p>
                <EtherscanLink networkId='3' txHash='0xf99f80c443a7faaba79804233f18a47b03a9c6dfbaf24ea133fd91ed2feec12f' />
            </div>
            <br />
            <div>
                <p>Mainnet</p>
                <EtherscanLink networkId='1' txHash='0x4203127198f6d321153fc2925ced7eef7f5476c7cec5ba8ac8a0d10e5b9c8b2f' />
            </div>
            <br />
            <div>
                <p>No network specified, default is Mainnet</p>
                <EtherscanLink txHash='0x4203127198f6d321153fc2925ced7eef7f5476c7cec5ba8ac8a0d10e5b9c8b2f' />
            </div>
            <br />
            <div>
                <p>Custom text</p>
                <EtherscanLink txHash='0x4203127198f6d321153fc2925ced7eef7f5476c7cec5ba8ac8a0d10e5b9c8b2f'>
                    Click here
                </EtherscanLink>
            </div>
        </div>
    ))
    .add('address', () => (
        <div>
            <div>
                <p>Ropsten</p>
                <EtherscanLink networkId='3' address='0xea674fdde714fd979de3edf0f56aa9716b898ec8' />
            </div>
            <br />
            <div>
                <p>Mainnet</p>
                <EtherscanLink networkId='1' address='0xea674fdde714fd979de3edf0f56aa9716b898ec8' />
            </div>
            <br />
            <div>
                <p>No network specified, default is Mainnet</p>
                <EtherscanLink address='0xea674fdde714fd979de3edf0f56aa9716b898ec8' />
            </div>
            <br />
            <div>
                <p>Custom text</p>
                <EtherscanLink address='0xea674fdde714fd979de3edf0f56aa9716b898ec8'>
                    Click here
                </EtherscanLink>
            </div>
        </div>
    ))
    .add('none is set', () => (
        <div>
            <div>
                If no tx or address is set, points to homepage
            </div>
            <br/>
            <div>
                <p>Ropsten</p>
                <EtherscanLink networkId='3' />
            </div>
            <br />
            <div>
                <p>Mainnet</p>
                <EtherscanLink networkId='1' />
            </div>
            <br />
            <div>
                <p>Custom text</p>
                <EtherscanLink >
                    Click here
                </EtherscanLink>
            </div>
        </div>
    )
    );