import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, Icon} from 'antd';
import BoolInput from './BoolInput.jsx';
import AddressInput from './AddressInput.jsx';
import EtherInput from './EtherInput.jsx';
import CustomInput from './CustomInput.jsx';
import {getDefaultValue, isArrayType, getArrayType} from '../../scripts/utils.js';


/**
 * Set of function input fields with a button. 
 * Props:
 * inputs - array of ABI-like input params [{name, type, indexed},..]
 * ethInput - if true, renders input for ETH value, false by default
 * onClick -  Button click handler (inputs, eth) => {}, receives array of param values and ethValue
 * button - Button text
 */
class FunctionInputs extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInputParamType(paramName) {
        const item = this.props.inputs.find(item => item.name == paramName);
        return item ? item.type : this.props.inputs[0].type;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.props.onClick) {
                    const {ETH: ethValue, ...paramValues} = values;

                    this.props.onClick(
                        Object.keys(paramValues).map(key => paramValues[key]),
                        ethValue
                    );
                }
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        //Replace empty input names with 'ParamXX' 
        let inputs = this.props.inputs.map(
            (input, index) =>
                input.name === '' ? Object.assign({}, input, {name: `Input#${index}`}) : input
        );

        return (
            <Form layout='horizontal' onSubmit={this.handleSubmit}> {
                inputs.map((input, index) =>
                    <Form.Item key={input.name} label={`${input.name} (${input.type})`}>
                        {getFieldDecorator(input.name, {initialValue: getDefaultValue(input.type)})(
                            <CustomInput type={input.type}></CustomInput>
                        )}

                    </Form.Item>
                )
            }
                {
                    this.props.ethInput
                        ? (
                            <Form.Item label='ETH To Send'>
                                {getFieldDecorator('ETH', {})(
                                    <EtherInput defaultMode='ether' />
                                )}
                            </Form.Item>
                        ) : null
                }
                <Form.Item>
                    <Button htmlType='submit'>{this.props.button}</Button>
                </Form.Item>
            </Form>
        );
    }
}

FunctionInputs.propTypes = {
    inputs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })).isRequired,

    ethInput: PropTypes.bool,
    onClick: PropTypes.func,
    button: PropTypes.string
};

FunctionInputs.defaultProps = {
    inputs: [],
    ethInput: false,
    onClick: null,
    button: ''
};

export default Form.create({name: 'FunctionInputs'})(FunctionInputs);