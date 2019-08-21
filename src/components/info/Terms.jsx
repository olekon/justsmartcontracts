import React from 'react';
import StaticBlock from '../common/StaticBlock.jsx';
import styles from '../Globals.css';
import config from '../../../config.js';

const Terms = props => (
    <div className={styles.staticInfo}>
        <StaticBlock query={config.server.url + 'static/terms'} />
    </div>
);

export default Terms;