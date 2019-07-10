import React from 'react';

/**
 * Renders static information received from a query.
 * Props:
 * query - query string to fetch information
 */
class StaticBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {info: null};
    }

    componentDidMount() {
        
    }

    render() {
        return this.state.info ? (
            <div>
                {this.state.info}
            </div>
        ) : null;
    }
}

export default StaticBlock;