import withDownload from './withDownload.jsx';
import {Button} from 'antd';

/**
 * Button that cause file download when click 
 */
export default withDownload(Button, 'onClick');