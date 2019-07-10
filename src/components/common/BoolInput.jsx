import React from 'react';
import {Switch} from 'antd';
import PropTypes from 'prop-types';


/**
 * Input for boolean values
 * Props:
 * value - value to display - bool true/false
 * onChange - callback to receive new value (value)=>{}
 */
class BoolInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Switch 
                checkedChildren='true'
                unCheckedChildren='false'
                checked={this.props.value}
                onChange={this.props.onChange} 
            /> 
        );
    }
}

BoolInput.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func
}

export default BoolInput;