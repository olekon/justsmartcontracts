import React from 'react';
import StaticBlock from '../common/StaticBlock.jsx';
import config from '../../../config.js';
import urlJoin from 'url-join';
import styles from '../Globals.css';

const About = props => (
    <div className={styles.staticInfo}>
        <StaticBlock query={urlJoin(config.server.url, 'static/what')} />
    </div>
)

export default About;