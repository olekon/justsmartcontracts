import React from 'react';
import StaticBlock from '../common/StaticBlock.jsx';
import styles from '../Globals.css';
import config from '../../../config.js';
import urlJoin from 'url-join';

const Terms = props => (
    <div className={styles.staticInfo}>
        <StaticBlock query={urlJoin(config.server.url, 'static/terms')} />
    </div>
);

export default Terms;