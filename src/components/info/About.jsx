import React from 'react';
import {Typography} from "antd";

import styles from '../Globals.css';

const About = props => (
    <Typography className={styles.staticInfo}>
        <Typography.Title level={1}>What is it?</Typography.Title>
        <Typography.Paragraph>
            JustSmartContracts.dev is a place where you can “bookmark” certain Ethereum smart contracts and then watch for their properties and events or call functions in a user-friendly manner.
        </Typography.Paragraph>
        <Typography.Paragraph>
            JustSmartContracts.dev was designed for Ethereum developers in first place. But anybody can make use of it.
        </Typography.Paragraph>
        <Typography.Paragraph>
            JustSmartContracts.dev is front-end tool. There is no back-end where your data could leak. Source code is here, feel free to study it.
        </Typography.Paragraph>
        <Typography.Title level={3}>Known Issues</Typography.Title>
        <Typography.Paragraph>
            1. Array parameters items should be separated with comma 
        </Typography.Paragraph>
        <Typography.Paragraph>
        2. Therefore array parameters might be parsed incorrectly if items themselves contain space or comma
        </Typography.Paragraph>
    </Typography>
);

export default About;