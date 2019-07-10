import React from 'react';
import {Typography} from 'antd';

import styles from '../Globals.css';
import config from '../../../config.js';

const {Title, Paragraph, Text} = Typography;

const Privacy = props => (
    <Typography className={styles.staticInfo}>
        <Title level={1}>Privacy Policy</Title>
        <Paragraph type='secondary'>Last updated: July 08, 2019</Paragraph>
        <Title level={2}>General</Title>
        Welcome to JustSmartContracts.dev, a free, open-source, client-side tool for interacting with Ethereum blockchain. We do not collect, hold or store keys, account information or passwords. We do not collect personal data passively, do not monetize collection of data, and do not use your data for marketing or advertising.
        <Title level={2}>Blockchain</Title>
        However, due to the natural transparency of Ethereum blockchain, transactions that users send via JustSmartContracts.dev may be publicly accessible. This includes, but is not limited to, your public sending address, the public address of the receiver, the amount sent or received, and any other data a user has chosen to include in a given transaction. Information stored on a blockchain may be public, immutable, and difficult or even impossible to remove or delete. Transactions and addresses may reveal information about the user’s identity and information can potentially be correlated now or in the future by any party who chooses to do so, including law enforcement. Users are encouraged to review how privacy and transparency on the blockchain works.
        <Title level={2}>What is collected</Title>
        The only personal information we collect is an email address, that is used to contact JustSmartContracts.dev support. Without storing this email we are not able to answer user’s request. These emails are stored on the Namecheap servers. We will not share this information with a third party services.
        <Title level={2}>Changes to This Privacy Policy</Title>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this Privacy Policy.
        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        <Title level={2}>Contact Us</Title>
        If you have any questions about this Privacy Policy, please contact us: {config.contacts.email}

    </Typography>
);

export default Privacy;