import React from 'react';
import {storiesOf} from '@storybook/react';
import {withState} from '@dump247/storybook-state';
import {action, decorate, configureActions} from '@storybook/addon-actions';
import sampleData from './data.js';

import AddressInput from '../components/common/AddressInput.jsx';
import EtherInput from '../components/common/EtherInput.jsx';
import BoolInput from '../components/common/BoolInput.jsx';
import ContractInput from '../components/common/ContractInput.jsx';
import CustomInput from '../components/common/CustomInput.jsx';
import NetworkIdSelect from '../components/common/NetworkIdSelect.jsx';
import EventsInput, {Item as EventsInputItem} from '../components/common/EventInputs.jsx';

import contractList from '../stubs/contractListStub.js';

const sampleAddress = sampleData.sampleAddresses[0];
const sampleAddresses = sampleData.sampleAddresses;
const sampleEventAbi = contractList.find(item => item.name == 'Token').abi.find(item => item.name == 'Transfer' && item.type == 'event');

const fromJsonDecorator = decorate([args => args.map(arg => JSON.stringify(arg, null, '\t'))]);

storiesOf('EtherInput', module)
    .add('default', () => (
        <EtherInput
            onChange={action('EtherInput1-onChange')} />
    ))
    .add('default mode gwei', () => (
        <EtherInput
            defaultMode='gwei'
            onChange={action('EtherInput2-onChange')} />
    ))
    .add('default value (2 eth)', () => (
        <EtherInput
            value='2000000000000000000'
            defaultMode='ether'
            onChange={action('EtherInput3-onChange')} />
    ))
    ;


storiesOf('BoolInput', module)
    .add('default', withState({checked: false})(({store}) => (
        <BoolInput
            value={store.state.checked}
            onChange={value => store.set({checked: value})} />
    )))
    .add('initially on', withState({checked: true})(({store}) => (
        <BoolInput
            value={store.state.checked}
            onChange={value => store.set({checked: value})} />
    )))
    ;


storiesOf('AddressInput', module)
    .add('default', withState({value: '', isEthAddress: false})(({store}) => (
        <AddressInput
            value={store.state.value}
            onChange={(value, isEthAddress) =>
                store.set({
                    value,
                    isEthAddress
                })}
        />
    )))
    .add('default value', withState({value: sampleAddress, isEthAddress: false})(
        ({store}) => (
            <AddressInput
                value={store.state.value}
                onChange={(value, isEthAddress) =>
                    store.set({
                        value,
                        isEthAddress
                    })}
            />
        )))
    ;


storiesOf('CustomInput', module)
    .add('address', withState({value: sampleAddress, isEthAddress: false})(
        ({store}) => (
            <CustomInput
                type='address'
                value={store.state.value}
                onChange={(value, isEthAddress) =>
                    store.set({
                        value,
                        isEthAddress
                    })}
            />
        )))
    .add('bool (on)', withState({checked: true})(
        ({store}) => (
            <CustomInput
                type='bool'
                value={store.state.checked}
                onChange={value => store.set({checked: value})}
            />
        )))
    .add('ether (10 gwei)', withState({value: '10000000000'})(
        ({store}) => (
            <CustomInput
                type='eth'
                value={store.state.value}
                defaultMode='gwei'
                onChange={value => store.set({value})}
            />
        )))
    .add('default', withState({value: 'text'})(
        ({store}) => (
            <CustomInput
                type='other'
                value={store.state.value}
                onChange={value => store.set({value})}
            />
        )))
    ;


storiesOf('ContractInput', module)
    .add('default', () => (
        <ContractInput
            text='Sample Text'
            onLoad={action('ContracInpt-onLoad')}
        />
    ))
    ;

storiesOf('EventsInputItem', module)
    .add('address', withState({
        values: sampleAddresses
    })(
        ({store}) => (
            <EventsInputItem
                name='address1'
                type='address'
                values={store.state.values}
                onValueChange={(index, newValue) => {
                    const newValues = [...store.state.values];
                    newValues[index] = newValue;
                    store.set({values: newValues});
                }}
                onAddValue={() => {
                    const newValues = [...store.state.values];
                    newValues.push('');
                    store.set({values: newValues});
                }}
                onRemoveValue={() => {
                    const newValues = [...store.state.values];
                    newValues.splice(newValues.length - 1, 1);
                    store.set({values: newValues});
                }}
                onActivate={action('EventInputsItem - Activate')}
            />
        )))
    ;

storiesOf('EventsInput', module)
    .add('default', () => (
        <EventsInput
            onClick={fromJsonDecorator.action('EventsInput-Click')}
            button='Fetch'
            inputs={sampleEventAbi.inputs}
        />
    )
    );

storiesOf('NetworkIdSelect', module)
    .add('default', withState({value: '3'}) (({store}) => (
            <NetworkIdSelect
                onChange={value => store.set({value})}
                value={store.state.value}
            />
        )
    )
    );