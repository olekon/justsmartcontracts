import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import AddressInput from '../common/AddressInput.jsx';
import ContractInput from '../common/ContractInput.jsx';
import NetworkIdSelect from '../common/NetworkIdSelect.jsx';

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
        this.handleNetworkChanged = this.handleNetworkChanged.bind(this)
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onAddContract(values.name, this.state.address, this.state.networkId, values.abi);
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
        })
        /*this.setState({
            abi: JSON.stringify(truffleObject.abi, null, '\t'),
            bytecode: truffleObject.bytecode
        });*/
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="Name">
                    {getFieldDecorator('name', {})(
                        <Input autoComplete='off' />
                    )}
                </FormItem>
                <FormItem label="Address">
                    <AddressInput value={this.state.address} onChange={this.handleFromAddressChanged} />
                </FormItem>
                <FormItem label="Network id">
                    {/* {getFieldDecorator('networkId', {initialValue: 1})(
                        <Input autoComplete='off'/>                        
                    )} */}
                    <NetworkIdSelect value={this.state.networkId} onChange={this.handleNetworkChanged} />
                </FormItem>
                <FormItem label="ABI">
                    {getFieldDecorator('abi', {})(
                        <Input autoComplete='off' />
                    )}
                </FormItem>
                <FormItem label="dropAbi">
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

export default Form.create()(ContractForm);