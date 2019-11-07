import React from 'react';
import PropTypes from 'prop-types'
import {Table, Radio, Icon} from 'antd';
import {shortenEvent} from '../../scripts/utils.js';
import FormattedValue from './FormattedValue.jsx';
import {Map} from 'immutable';


/** 
 * Grid to render event objects.
 * Props:
 * events - array of event objects as returned from getPastEvents
 * event - entry of the ABI array 
*/
class EventsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uintMode: Map({})
        };
        this.handleModeChange = this.handleModeChange.bind(this);
        this.getUintMode = this.getUintMode.bind(this);
    };

    getUintMode(column) {
        const mode = this.state.uintMode.get(column);
        return mode ? mode : 'raw';
    }

    handleModeChange(column, value) {
        this.setState({
            uintMode: this.state.uintMode.set(column, value)
        });
    }



    render() {
        const rowKey = "__rowKey";
        const eventArgs = this.props.events.map(event => shortenEvent(event, rowKey));

        const getFilterProps = (column, type) => (
            type == 'uint256'
                ? ({
                    filterDropdown: (
                        <Radio.Group 
                            value={this.getUintMode(column)} 
                            onChange={e => this.handleModeChange(column, e.target.value)}
                        >
                            <Radio value='raw'>Number</Radio>
                            <Radio value='e18'>Ether</Radio>
                        </Radio.Group>
                    ),
                    filterIcon: <Icon type='setting' />
                })
                : {}
        );

        const columns = this.props.event.inputs.map((input, index) => ({
            title: input.name || `Param ${index}`,
            dataIndex: input.name || index,
            key: input.name || index,
            ...getFilterProps(input.name, input.type),
            render: value => (<FormattedValue type={input.type} value={value} mode={this.getUintMode(input.name)}/>)
        }));

        //let's add columns for system values: blockNumber or transaction hash, in future
        const systemColumns = [{
            title: 'Block',
            dataIndex: 'blockNumber',
            key: 'blockNumber',
            render: value => <FormattedValue type='' value={value} />
        }, {
            title: 'TxHash',
            dataIndex: 'transactionHash',
            key: 'transactionHash',
            render: value => <FormattedValue type='' value={value} />
        }];

        return (
            <Table dataSource={eventArgs} rowKey={rowKey} columns={columns.concat(systemColumns)} size='small' scroll={{x: true}}></Table >
        );
    }
}


EventsGrid.propTypes = {
    events: PropTypes.array.isRequired,
    event: PropTypes.object.isRequired
};

EventsGrid.defaultProps = {
    events: [],
    event: {}
};

export default EventsGrid;
