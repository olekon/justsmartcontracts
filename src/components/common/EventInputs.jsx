import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import {Switch, Button, Row, Col, Icon, Form} from 'antd';
import CustomInput from './CustomInput.jsx';
import {getDefaultValue} from '../../scripts/utils.js';
import {fromJS} from 'immutable';

const defaultActive = false;

/**
 * Single item of EventInputs, has a toggle to turn filter on/off and button to add filter fields.
 * Props:
 * type - ABI type of input parameter
 * values - array of values of type 'type' to display
 * onValueChange - event handler, fires when any change to the array occurs - (index, newValue) => {}
 * onAddValue - event handler, fires when '+' button pressed - () => {}
 * onRemoveValue - event handler, fires when '-' button pressed - () => {}
 * onActivate - event handler, fires when Switch is toggled (activated) => {}
 */
const Item = props => {
    const {name, type, values, onValueChange, onAddValue, onRemoveValue, onActivate, ...inputProps} = props;
    return (
        <>
            <span>
                <Switch
                    size='small'
                    defaultChecked={defaultActive}
                    onChange={(checked) => props.onActivate && props.onActivate(checked)}
                />
            </span>
            <span>
                <Button 
                    size='small' 
                    onClick={props.onAddValue}
                >
                    <Icon type='plus' />
                </Button>
            </span>
            <span>
                <Button 
                    size='small' 
                    disabled={values.length <= 1} 
                    onClick={() => props.onRemoveValue()}
                >
                    <Icon type='minus' />
                </Button>
            </span>
            {values.map((item, index) => (
                <CustomInput
                    size='small'
                    key={index}
                    type={type}
                    onChange={(value) => props.onValueChange(index, value)}
                    value={item}
                />
            ))}
        </>
    );
}


/**
 * Creates filter object based on indexed inputs of event ABI, 
 * keys are inputs names, values - are objects {values, active}
 * values - list of input values
 * active - true if filter is active, otherwise - false
 */
const createFilterMap = inputs =>
    fromJS(
        inputs.reduce(
            (filter, input) =>
                ({
                    ...filter,
                    [input.name]: {
                        values: ([getDefaultValue(input.type)]),
                        active: defaultActive
                    },
                }),
            {}
        )
    );

/**
 * Updates filter state based on action
 * action.type - one of 'update'/'add'/'remove'/'activate'
 * action.input - name of filter's input param to 'update'
 * action.index - index in param's values array to 'update'
 * action.value - new value for 'update' or 'activate' action
 * action.inputType - ABI type of input 
 */
const filterReducer = (filterState, action) => {
    switch (action.type) {
        case 'activate':
            return filterState.setIn([action.input, 'active'], action.value);

        case 'update':
            return filterState.setIn([action.input, 'values', action.index], action.value);

        case 'add':
            return filterState.updateIn(
                [action.input, 'values'],
                values => values.push(getDefaultValue(action.inputType))
            );
        case 'remove':
            return filterState.updateIn([action.input, 'values'], values => values.pop());
        default:
            return filterState;

    }
}


/**
 * Renders block of event filter inputs. Each input can be toggled and also include several values  
 * Props:
 * inputs - array of ABI-like input params [{name, type, indexed},..]} 
 * onClick - event handler for button click. receives filter object for web3 getPastEvents
 *      based on values entered and whether input is toggled to 'on'
 * button - Button text
 */
const EventInputs = props => {
    //select only indexed parameters
    const indexedParams = props.inputs.filter(input => input.indexed);

    const [filterState, updateFilter] = useReducer(filterReducer, indexedParams, createFilterMap);

    const handleClick = () => {
        if (props.onClick) {
            let resultingFilter = filterState
                .filter((value) => value.get('active') === true)
                .map((value, key) => value.get('values'))
                .toJS();

            props.onClick(resultingFilter);
        }
    }
    return (
        <Form>
            {indexedParams.map((item) => (
                <Form.Item key={item.name} label={`${item.name} (${item.type})`}>
                    <Item
                        type={item.type}
                        values={filterState.getIn([item.name, 'values']).toArray()}
                        onValueChange={(index, value) => updateFilter({
                            type: 'update',
                            input: item.name,
                            value,
                            index,
                            inputType: item.type
                        })}
                        onAddValue={() => updateFilter({type: 'add', inputType: item.type, input: item.name, })}
                        onRemoveValue={() => updateFilter({type: 'remove', input: item.name, })}
                        onActivate={(value) => updateFilter({type: 'activate', value, input: item.name, })}
                    />
                </Form.Item>
            ))}
            <Form.Item>
                <Button onClick={handleClick}>
                    {props.button}
                </Button>
            </Form.Item>
        </Form >
    );
}

EventInputs.propTypes = {
    inputs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        indexed: PropTypes.bool.isRequired
    })).isRequired,
};


export default EventInputs;
export {Item};