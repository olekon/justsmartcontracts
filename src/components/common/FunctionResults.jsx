import React from 'react';
import { Table } from 'antd';
import FormattedValue from './FormattedValue.jsx';
import Column from 'antd/lib/table/Column';

/** Displays function results
 *  Props:
 * method - ABI method,
 * result - resulting object or value to display
 */
class FunctionResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.result !== null) {
            if (this.props.method.outputs.length == 1) {
                return (
                    <FormattedValue
                        type={this.props.method.outputs[0].type}
                        value={this.props.result}
                    />
                );
            } else {
                const data = this.props.method.outputs.map((item, index) => ({
                    name: item.name || `#${index}`,
                    type: item.type,
                    index: index,
                    value: this.props.result[index]
                }));
                return (
                    <Table
                        showHeader={false}
                        size='small'
                        dataSource={data}
                        rowKey='index'
                        pagination={false}
                    >
                        <Column title='Name' dataIndex='name' key='name'/>
                        <Column                            
                            title='Value'
                            dataIndex='index'
                            key='index'
                            render={index => (
                                <FormattedValue
                                    type={data[index].type}
                                    value={data[index].value}
                                />
                            )}
                        />
                    </Table>
                );
            }
        } else {
            return <div />;
        }
    }
}

export default FunctionResults;
