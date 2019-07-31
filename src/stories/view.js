import React from 'react';
import {Button, Radio} from 'antd';
import {storiesOf} from '@storybook/react';
import {withState} from '@dump247/storybook-state';
import {action, configureActions} from '@storybook/addon-actions';

import FormattedValue from '../components/common/FormattedValue.jsx';
import SignedTransactionView from '../components/common/SignedTransactionView.jsx';
import errorCodes from '../scripts/errorCodes.js';
import * as message from '../components/common/errorMessage.js';

storiesOf('FormattedValue', module) 
    .add('different types', () => (
        <>
            <div>                
                <FormattedValue type='bool' value={true} />
                <p>Bool 'true'</p>
            </div>
            <div>                
                <FormattedValue type='bool' value={false} />
                <p>Bool 'false'</p>
            </div>
            <div>                
                <FormattedValue type='address' value='0x0123456789abcdef0123456789abcdef01234567'/>
                <p>Address</p>
            </div>
            <div>                
                <FormattedValue type='uint256' value='12345678900000000000' />
                <p>Uint256 12345678900000000000 default mode (raw)</p>
            </div>
            <div>                
                <FormattedValue type='uint256' value='12345678900000000000' mode='raw' />
                <p>Uint256 12345678900000000000 raw</p>
            </div>
            <div>                
                <FormattedValue type='uint256' value='12345678900000000000' mode='e18' />
                <p>Uint256 12345678900000000000 e18</p>
            </div>
        </>
    ))
    ;


storiesOf('SignedTransactionView', module)
    .add('default', () => (
        <SignedTransactionView
            signedTx='f8aa82019f84ee6b280082c35094c63a9832c0218e1c0c03be59f5fea48ca4e85eb680b844a5e90eee0000000000000000000000009754f02b4511837f0aea9c2ca4074c4223835bec00000000000000000000000000000000000000000000000000000000000000011ba07d6538c6ff7354bd0afb847522c49118b81041d364f1fe3e26a96e45c3775c6aa06ffb2192015123950e4372e62b87cb5da43af7cfcbd2c672d9376979d6dae526'
        />
    ))
    ;


storiesOf('messages', module)
    .add('error', () => (
        <Button onClick={() => message.showError(errorCodes.metamaskConnectFailed)}>Show Error</Button>
    ))
    .add('notification', () => (
        <Button onClick={() => message.showNotification(errorCodes.metamaskReject)}>Show Info</Button>
    ))
    .add('tx sent mainnet', withState({networkId: 1})(({store}) => (
        <div>
            <Radio.Group
                onChange={e => store.set({networkId: e.target.value})}
                value={store.state.networkId}
            >
                <Radio value={1}>Mainnet</Radio>
                <Radio value={3}>Ropsten</Radio>
                <Radio value={4}>Rinkeby</Radio>
                <Radio value={5}>Goerli</Radio>
                <Radio value={42}>Kovan</Radio>
                <Radio value={99}>Other</Radio>
            </Radio.Group>
            <Button
                onClick={() =>
                    message.showTransactionSent(store.state.networkId, '0x2eb39e3d91a38e28f9b96969385c23dfcaa524e84487653206eef43c57826cdb')}
            >
                Send tx
        </Button>
        </div>
    )))
    .add('gas error', () => (
        <Button onClick={() => message.showEstimateGasError()}>Show Gas Error</Button>
    ))
    ;