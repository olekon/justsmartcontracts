import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import AddressInput from '../common/AddressInput.jsx';
import ContractInput from '../common/ContractInput.jsx';
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
            address: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFromAddressChanged = this.handleFromAddressChanged.bind(this);
        this.handleFileLoad = this.handleFileLoad.bind(this);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.onAddContract(values.name, this.state.address, values.networkId, values.abi);
          }
        });
    }

    handleFromAddressChanged(value, isEthAddress) {
        this.setState({
            address: value
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
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="Name">
                    {getFieldDecorator('name', { })(
                        <Input autoComplete='off'/>
                    )}
                </FormItem>
                <FormItem label="Address">
                    <AddressInput value={this.state.address} onChange={this.handleFromAddressChanged} />
                </FormItem>
                <FormItem label="Network id">
                    {getFieldDecorator('networkId', { })(
                        <Input autoComplete='off'/>
                    )}
                </FormItem>
                <FormItem label="ABI">
                    {getFieldDecorator('abi', { })(
                        <Input autoComplete='off'/>
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