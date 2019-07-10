import React from 'react';
import { Form, Input, Button } from 'antd';
import * as nodeLogic from '../../scripts/nodeLogic.js';

const FormItem = Form.Item;

/**
 * nodeList,
 * nodeKey
 * onSubmit
 */
class NodeFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.nodeName, this.state.endpoint, this.state.id);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let data = {};
        if (nextProps.nodeKey !== prevState.prevNodeKey) {
            let node = nodeLogic.getCustomNode(nextProps.nodeList, nextProps.nodeKey);
            data.prevNodeKey = nextProps.nodeKey;
            data.nodeName = node ? node.name : '';
            data.endpoint = node ? node.endpoint : '';
            data.id = node ? node.id : '';
        } 
        return data;
    }

    handleChange(e, item) {
        let data = {};
        data[item] = e.target.value;
        this.setState( data )
    }

    render() {
        const buttonText = this.state.prevNodeKey ? 'Save' : 'Add';
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="Name">
                    <Input 
                        placeholder="my node"
                        value={this.state.nodeName}
                        onChange={ (e) => this.handleChange(e, 'nodeName')}
                        required
                        /*validationErrors={{
                            isDefaultRequiredValue: 'Field is required'
                        }}*/
                    />
                </FormItem>
                <FormItem label="Endpoint">
                    <Input 
                        placeholder="https://localhost:8545"
                        value={this.state.endpoint}
                        onChange={ (e) => this.handleChange(e, 'endpoint')}
                        required
                    />
                </FormItem>
                <FormItem label="Chain id">
                    <Input 
                        placeholder="999"
                        value={this.state.id}
                        onChange={ (e) => this.handleChange(e, 'id')}
                        required
                    />
                </FormItem>
                <Form.Item>
                    <Button type="primary" htmlType="submit">{buttonText}</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(NodeFrom);