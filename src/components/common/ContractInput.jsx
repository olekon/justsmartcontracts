import React from 'react';
import PropTypes from 'prop-types'; 
import {Upload, Icon} from 'antd';


/**
 * Upload dragger that accepts truffle contract files.
 * Props
 * onLoad - function that recevies contract object from the truffle file
 * text - text inside the dragger area
 */
class ContractInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileReader;
        this.state = {};
        this.handleBeforeUpload = this.handleBeforeUpload.bind(this);
        this.handleFileLoad = this.handleFileLoad.bind(this);
    }

    handleFileLoad() {
        if(this.props.onLoad) {
            this.props.onLoad(JSON.parse(this.fileReader.result));
        }
    }

    handleBeforeUpload(file) {
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.handleFileLoad;
        this.fileReader.readAsText(file); 
        return false;
    }

    render() {
        const text = this.props.text == '' ? null : (<div>{this.props.text}</div>);
        return (
            <Upload.Dragger accept='.json' beforeUpload={this.handleBeforeUpload} showUploadList={false}>
                <Icon type='upload'></Icon>
                {text}
            </Upload.Dragger>
        );
    }
}


ContractInput.propTypes = {
    onLoad: PropTypes.func,
    text: PropTypes.string
};

ContractInput.defaultProps = {
    text: ''
};

export default ContractInput;



