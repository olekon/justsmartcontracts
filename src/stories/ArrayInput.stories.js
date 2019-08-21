import React, {PureComponent} from 'react'
import {storiesOf} from '@storybook/react';
import {withState} from '@dump247/storybook-state';
import ArrayInput from '../components/common/ArrayInput.jsx';
import sampleData from './data.js';

storiesOf('ArrayInput', module)
    .add('addresses', withState({value: sampleData.sampleAddresses})(
        ({store}) => (
            <ArrayInput
                type='address'
                value={store.state.value}
                onChange={value => store.set({value})}
            />
        ))
    )
    .add('uint', withState({value: ['10000000', '2', '2372873923']})(
        ({store}) => (
            <ArrayInput
                type='uint256'
                value={store.state.value}
                onChange={value => store.set({value})}
            />
        ))
    )
    ;
