import React from 'react';
import PropTypes from 'prop-types';
import {Spin, List, Card, Button, Row, Col, Divider} from 'antd';
import FunctionResults from '../common/FunctionResults.jsx';
import {getEtherBalance} from '../../scripts/utils.js';
import FormattedValue from '../common/FormattedValue.jsx';
import {makeCancelable} from '../../scripts/promise.js';

const CardTitleSpan = 6;

/**
 * Props: 
 *  titleSpan - span of title column
 *  title - title text 
 */
const PropertyCard = props => (
    <Card size='small'>
        <Row>
            <Col span={props.titleSpan}>
                <span>{props.title}</span>
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>
    </Card>
);



/**
 * List of contract's constant properties
 * Props should contain 'contract' - web3.Contract object
 */
class ContractPropertiesView extends React.Component {
    constructor(props) {
        super(props);

        //data - array of properties values, each item is {name, value, type}
        this.state = {
            data: null,
            eth: null
        };

        this.request == null;
        this.update = this.update.bind(this);
    }

    /**
     * Fetches constant methods with no parameters to state's data array
     */
    fetchProperties() {
        //select only constant methods with no parameters
        let methods = this.props.contract._jsonInterface.filter(
            item => item.constant === true && item.inputs.length == 0
        );

        let promises = methods.map(method =>
            this.props.contract.methods[method.name]().call()
                .then(result => ({
                    method,
                    result,
                }))
                .catch(error => ({
                    method,
                    result: error.toString(),
                }))
        );

        return Promise.all(promises);
    }

    update() {
        this.setState({data: null, eth: null});
        this.request = makeCancelable(Promise.all([
            this.fetchProperties(),
            getEtherBalance(this.props.contract)
        ]));

        this.request.promise
            .then(results => {
                this.setState({data: results[0], eth: results[1]});
            })
            .catch(error => {
                // if (!error.isCanceled) {
                //     console.log(error);
                // }
            });
    }

    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.contract._address !== prevProps.contract._address) {
            this.update();
        }
    }

    componentWillUnmount() {
        if (this.request) {
            this.request.cancel();
        }
    }

    render() {
        if (this.state.data === null || this.state.eth === null) {
            return <Spin size='large' />;
        } else {
            return (
                <>
                    <PropertyCard title='Address' titleSpan={CardTitleSpan}>
                        <FormattedValue value={this.props.contract._address} type='address' />
                    </PropertyCard>
                    <PropertyCard title='ETH Balance' titleSpan={CardTitleSpan}>
                        <FormattedValue value={this.state.eth} type='uint256' mode='e18' />
                    </PropertyCard>
                    <Divider></Divider>
                    <List
                        grid={{column: 1}}
                        size='small'
                        dataSource={this.state.data}
                        renderItem={item => (
                            <PropertyCard title={item.method.name} titleSpan={CardTitleSpan}>
                                <FunctionResults method={item.method} result={item.result}></FunctionResults>
                            </PropertyCard>
                        )}
                    />
                    <Button icon='sync' onClick={this.update}>Refresh</Button>
                </>
            )
        }
    }
}

ContractPropertiesView.propTypes = {
    contract: PropTypes.object.isRequired
}

export default ContractPropertiesView;