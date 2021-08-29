import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
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
            networkId: '1'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFromAddressChanged = this.handleFromAddressChanged.bind(this);
        this.handleFileLoad = this.handleFileLoad.bind(this);
        this.handleNetworkChanged = this.handleNetworkChanged.bind(this);
        this.handleEtherscanAbiResponse = this.handleEtherscanAbiResponse.bind(this);
        this.getEtherscanAbiOptions = this.getEtherscanAbiOptions.bind(this);
    }

    componentDidMount() {
        const [form] = Form.useForm();
        form.validateFields();
    }

    handleSubmit(e) {
        e.preventDefault();
        const [form] = Form.useForm();
        form.validateFields((err, values) => {
            if (!err) {
                this.props.onAddContract(values.name, values.address, this.state.networkId, values.abi);
            }
        });
    }

    handleFromAddressChanged(value, isEthAddress) {
        this.setState({
            address: value
        });
    }

    handleNetworkChanged(value) {
        this.setState({
            networkId: value
        });
    }

    handleFileLoad(truffleObject) {
        this.props.form.setFieldsValue({
            abi: JSON.stringify(truffleObject.abi, null, '\t')
        });
    }

    getEtherscanAbiOptions() {
        return {
            address: this.props.form.getFieldsValue(['address']).address,
            networkId: this.state.networkId
        };
    }

    handleEtherscanAbiResponse(response) {
        if (response.status == 1) {
            this.props.form.setFieldsValue(
                {abi: response.result}
            );
        } else {
            this.props.form.setFieldsValue(
                {abi: ''}
            );
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="Name" name="name" rules={[{required: true, message: 'Please input the name'}]}>
                    <Input autoComplete='off' />
                </FormItem>
                <FormItem label="Address" name="address" rules={[{required: true, pattern:/^0x[a-fA-F0-9]{40}$/, message: 'Please input the address'}]}>
                    <AddressInput />
                </FormItem>
                <FormItem label="Network id">
                    <NetworkIdSelect value={this.state.networkId} onChange={this.handleNetworkChanged} />
                </FormItem>
                <FormItem label="ABI" name="abi" rules={[{required: true, message: 'Please input the ABI'}]}>
                    <Input.TextArea rows={8} placeholder='ABI/JSON Interface' autoComplete='off' />
                    <AbiQueryButton
                        getOptions={this.getEtherscanAbiOptions}
                        onResponse={this.handleEtherscanAbiResponse}
                    >
                        Check Etherscan
                    </AbiQueryButton>
                </FormItem>
                <FormItem label="Or load build file">
                    <ContractInput
                        text='Select truffle-compiled file'
                        onLoad={this.handleFileLoad}
                    />
                </FormItem>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default ContractForm;