import React from 'react';
import {getApiAbiUrl} from '../../scripts/etherscan.js';

/**
 * Provides component with the ability to query for contract's ABI on Etherscan
 * @param {*} WrappedComponent Component to wrap
 * @param {*} onQueryEvent Event prop to attach query function to
 * Props:
 * getOptions - function that returns {address, networkId} object to query for ABI
 * onResponse - event handler, fires when query response is obtained (result)=>{} 
 */
function withAbiQuery(WrappedComponent, onQueryEvent) {
    class WithAbiQuery extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.handleQuery = this.handleQuery.bind(this);
        }

        handleQuery() {
            const options = this.props.getOptions();
            const url = getApiAbiUrl(options.networkId, options.address);
            fetch(url)
            .then(res => res.json())
            .then(result => this.props.onResponse(result));
        }

        render() {
            const onQueryEventProps = {
                [onQueryEvent]: this.handleQuery
            };
            const {getOptions, onResponse, ...restProps} = this.props;
            return (
                <WrappedComponent
                    {...onQueryEventProps}
                    {...restProps}
                />
            );
        }
    }

    WithAbiQuery.displayName = `WithAbiQuery(${getDisplayName(WrappedComponent)})`;
    return WithAbiQuery;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAbiQuery;

