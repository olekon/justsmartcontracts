import React from 'react';
import StaticBlock from '../common/StaticBlock.jsx';
import styles from '../Globals.css';
import config from '../../../config.js';

const Privacy = props => (
    <div className={styles.staticInfo}>
        <StaticBlock query={config.server.url + 'static/privacy'} />
    </div>
);

export default Privacy;