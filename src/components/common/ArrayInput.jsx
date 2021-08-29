import React from 'react';
import CustomInput from './CustomInput.jsx';
import {List} from 'immutable';
import {getDefaultValue} from '../../scripts/utils.js';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

/**
 * Input box for entering array-like values
 * Props:
 * type - ABI type of array items
 * value - array to render
 * onChange - event handler, fires when any change in array occurs. (newArray)=>{}
 */
const ArrayInput = (props) => {
    //extract rest inputProps
    const { type, value, onChange, ...inputProps } = props;
    const currentValue = List(value);

    const handleItemChange = (item, index) => {
        if (onChange) {
            onChange(currentValue.set(index, item).toArray());
        }
    };

    const addItem = () => {
        if (onChange) {
            onChange(currentValue.push(getDefaultValue(type)).toArray());
        }
    };

    const removeItem = () => {
        if (onChange) {
            onChange(currentValue.pop().toArray());
        }
    };

    return (
        <>
            <span>
                <Button size="small" onClick={addItem}>
                    <PlusOutlined />
                </Button>
            </span>
            <span>
                <Button
                    size="small"
                    onClick={removeItem}
                    disabled={value.length <= 0}
                >
                    <MinusOutlined />
                </Button>
            </span>
            {value.map((item, index) => (
                <CustomInput
                    key={index}
                    type={type}
                    value={item}
                    onChange={(newItem) => handleItemChange(newItem, index)}
                />
            ))}
        </>
    );
};

export default ArrayInput;

