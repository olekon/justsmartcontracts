import React from 'react';
import StaticBlock from '../common/StaticBlock.jsx';
import styles from '../Globals.css';
import urlJoin from 'url-join';
import config from '../../../config.js';

const Privacy = props => (
    <div className={styles.staticInfo}>
        <StaticBlock query={urlJoin(config.server.url, 'static/privacy')} />
    </div>
);

export default Privacy;