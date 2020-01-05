import React from 'react';
import { Collapse, Form, Input, Row, Col, Spin } from 'antd';
import EventInputs from '../common/EventInputs.jsx';
import EventsGrid from '../common/EventsGrid.jsx';

const defaultToBlock = 'latest';
const defaultFromBlock = 0;

/**
 * An item of event's list. Contains params filter and grid.
 * Props:
 * event - event entry of the ABI array,
 * onFetch - Fetch button handler (inputs)
 */
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromBlock: '',
            toBlock: '',
            events: null,
            loading: false,
        };

        this.handleFromBlockChange = this.handleFromBlockChange.bind(this);
        this.handleToBlockChange = this.handleToBlockChange.bind(this);
        this.handleFetchClick = this.handleFetchClick.bind(this);
    }

    handleFetchClick(filter) {
        if (this.props.onFetch) {
            this.setState({ loading: true });
            this.props.onFetch(
                this.props.event.name,
                filter,
                this.state.fromBlock,
                this.state.toBlock
            ).then(events => {
                this.setState({ events, loading: false });
            });
        }
    }

    handleToBlockChange(e) {
        this.setState({
            toBlock: e.target.value
        });
    }

    handleFromBlockChange(e) {
        this.setState({
            fromBlock: e.target.value
        });
    }

    getIndexedInputs() {
        return this.props.event.inputs.filter(input => input.indexed);
    }

    render() {
        const indexedInputs = this.getIndexedInputs();
        return (
            <>
                <Form>
                    <Row gutter={8}>
                        <Col span={6}>
                            <Form.Item label='From block'>
                                <Input value={this.state.fromBlock} onChange={this.handleFromBlockChange} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label='To block'>
                                <Input value={this.state.toBlock} onChange={this.handleToBlockChange} />
                            </Form.Item>

                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col span={12}>
                        <EventInputs button='Fetch' inputs={indexedInputs} onClick={this.handleFetchClick} />
                    </Col>
                </Row>
                <Spin spinning={this.state.loading}>
                {
                    this.state.events
                        ? <EventsGrid events={this.state.events} event={this.props.event} />
                        : null
                }
                </Spin>
            </>
        );
    }
}



/**
 *  List of contract's events. 
 * Props
 * contract - web3 contract object 
 */
class ContractEventsView extends React.Component {
    constructor(props) {
        super(props);

        this.fetchEvents = this.fetchEvents.bind(this)
    }

    fetchEvents(eventName, filter, fromBlock, toBlock) {
        //const filter = inputs.filter(input => input !== '');

        return this.props.contract.getPastEvents(
            eventName,
            {
                filter: filter,
                fromBlock: fromBlock == '' ? defaultFromBlock : fromBlock,
                toBlock: toBlock == '' ? defaultToBlock : toBlock
            }
        );
    }

    render() {
        const events = this.props.contract._jsonInterface.filter(
            item => item.type == 'event'
        );

        return (
            <Collapse>
                {events.map((event, index) => (
                    <Collapse.Panel header={event.name} key={event.name + index}>
                        <Item event={event} onFetch={this.fetchEvents} />
                    </Collapse.Panel>
                ))}
            </Collapse>
        );
    }
}

export default ContractEventsView;