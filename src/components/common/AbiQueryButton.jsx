import withAbiQuery from './withAbiQuery.jsx';
import {Button} from 'antd';

/**
 * A button that can query contract's ABI when clicked 
 */
export default withAbiQuery(Button, 'onClick');