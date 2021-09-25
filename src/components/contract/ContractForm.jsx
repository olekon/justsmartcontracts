import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import AddressInput from '../common/AddressInput.jsx';
import ContractInput from '../common/ContractInput.jsx';
import NetworkIdSelect from '../common/NetworkIdSelect.jsx';
import AbiQueryButton from '../common/AbiQueryButton.jsx';

const FormItem = Form.Item;

/**
 *  Props
 * onAddContract
 */
class ContractForm extends React.Component {
    constructor(props) {
        super(props);
        /*this.propTypes = {
            form: formShape,
        };*/

        this.state = {
            address: '',
            networkId: '1',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFromAddressChanged = this.handleFromAddressChanged.bind(
            this
        );
        this.handleSubmitFailed = this.handleSubmitFailed.bind(this);
        this.handleFileLoad = this.handleFileLoad.bind(this);
        this.handleNetworkChanged = this.handleNetworkChanged.bind(this);
        this.handleEtherscanAbiResponse = this.handleEtherscanAbiResponse.bind(
            this
        );
        this.getEtherscanAbiOptions = this.getEtherscanAbiOptions.bind(this);
        this.formRef = React.createRef();
    }

    componentDidMount() {
        this.formRef.current.validateFields();
    }

    handleSubmit(values) {
        this.props.onAddContract(
            values.name,
            values.address,
            values.networkId,
            values.abi
        );
    }

    handleSubmitFailed(data) {
        console.log(data.errorFields);
    }

    handleFromAddressChanged(value, isEthAddress) {
        this.setState({
            address: value,
        });
    }

    handleNetworkChanged(value) {
        this.setState({
            networkId: value,
        });
    }

    handleFileLoad(truffleObject) {
        this.formRef.current.setFieldsValue({
            abi: JSON.stringify(truffleObject.abi, null, '\t'),
        });
    }

    getEtherscanAbiOptions() {
        return {
            address: this.formRef.current.getFieldsValue(['address']).address,
            networkId: this.state.networkId,
        };
    }

    handleEtherscanAbiResponse(response) {
        if (response.status == 1) {
            this.formRef.current.setFieldsValue({ abi: response.result });
        } else {
            this.formRef.current.setFieldsValue({ abi: '' });
        }
    }

    render() {
        return (
            <Form
                name="contractForm"
                onFinish={this.handleSubmit}
                onFinishFailed={this.handleSubmitFailed}
                ref={this.formRef}
            >
                <FormItem
                    name="name"
                    label="Name"
                    rules={[
                        { required: true, message: 'Please input the name' },
                    ]}
                >
                    <Input autoComplete="off" />
                </FormItem>
                <FormItem
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            pattern: /^0x[a-fA-F0-9]{40}$/,
                            message: 'Please input the address',
                        },
                    ]}
                >
                    <AddressInput />
                </FormItem>
                <FormItem
                    label="Network id"
                    name="networkId"
                    initialValue={this.state.networkId}
                >
                    <NetworkIdSelect />
                </FormItem>
                <FormItem label="ABI">
                    <FormItem
                        name="abi"
                        label="ABI"
                        rules={[
                            { required: true, message: 'Please input the ABI' },
                        ]}
                    >
                        <Input.TextArea
                            rows={8}
                            placeholder="ABI/JSON Interface"
                            autoComplete="off"
                        />
                    </FormItem>
                    <AbiQueryButton
                        getOptions={this.getEtherscanAbiOptions}
                        onResponse={this.handleEtherscanAbiResponse}
                    >
                        Check Etherscan
                    </AbiQueryButton>
                </FormItem>
                <FormItem label="Or load build file">
                    <ContractInput
                        text="Select truffle-compiled file"
                        onLoad={this.handleFileLoad}
                    />
                </FormItem>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default ContractForm;
