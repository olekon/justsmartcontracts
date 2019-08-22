import React from 'react';
import PropTypes from 'prop-types';

/**
 * Provides component with ability to download a text file 
 * @param {*} WrappedComponent Component to wrap 
 * @param {*} onDownloadEvent name of the event prop to attach Download function 
 * Props:
 *  getContent - function that returns content for downlodable file: ()=>content
 *  getFileName - function that returns file name for downloaded file ()=>filename
 */
function withDownload(WrappedComponent, onDownloadEvent) {
    class WithDownload extends React.Component {

        constructor(props) {
            super(props);
            this.handleDownload = this.handleDownload.bind(this);
        }

        handleDownload() {
            const text = this.props.getContent();
            var element = document.createElement("a");
            var file = new Blob([text], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = this.props.getFileName();
            element.click();
        }

        render() {
            const onDownloadProps = {
                [onDownloadEvent]: this.handleDownload
            };
            const { getContent, getFileName, ...restProps } = this.props;

            return (
                <WrappedComponent
                    {...onDownloadProps}
                    {...restProps}
                />
            );
        }
    }

    WithDownload.propTypes = {
        getContent: PropTypes.func.isRequired,
        getFileName: PropTypes.func.isRequired
    };

    WithDownload.displayName = `WithDownload(${getDisplayName(WrappedComponent)})`;

    return WithDownload;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withDownload;
