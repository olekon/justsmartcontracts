import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Renders static text received from a query. Supports markdown
 * Props:
 * query - query string to fetch information
 */
class StaticBlock extends React.Component {
    constructor(props) {
        super(props);

        //info - markdown or text to be rendered
        this.state = {info: ''};
        this.sendQuery = this.sendQuery.bind(this);
    }

    componentDidMount() {
        this.sendQuery();
    }

    sendQuery() {
        fetch(this.props.query)
        .then(res => res.json())
        .then(res => this.setState({info: res.text}));
    }

    render() {
        return (
            <div>
                <ReactMarkdown source={this.state.info} />
            </div>
        )
    }
}

export default StaticBlock;