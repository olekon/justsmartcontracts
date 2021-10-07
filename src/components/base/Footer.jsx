import React from 'react';
import {Layout, Row, Col, Typography, Divider} from 'antd';
import {NavLink} from 'react-router-dom';
import config from '../../../config.js';
import styles from './Footer.scss';

const {Title, Text} = Typography;
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Row>
                    <Col span={6} offset={0}>
                        <p className={styles.sectionHeader}>Contacts</p>
                        <p><a target='_blank' href={config.contacts.github} className={styles.contactsLink}>Github</a></p>
                        <p><a target='_blank' href={'mailto:' + config.contacts.email} className={styles.contactsLink}>Email</a></p>
                    </Col>
                    <Col span={6} offset={0}>
                        <p className={styles.sectionHeader}>Donations</p>
                        <p className={styles.donationText}>ETH: {config.donations.eth}</p>
                        <p className={styles.donationText}>BTC: {config.donations.btc}</p>
                    </Col>
                </Row>  
                <Divider></Divider>              
                <Row>
                    <Col span={6}>
                        <p className={styles.sectionHeader}>All Rights reserved</p>
                    </Col>
                    <Col>
                        <NavLink to='/privacy' className={styles.legalLink}>Privacy</NavLink>
                        <NavLink to='/terms' className={styles.legalLink}>Terms of use</NavLink>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Footer;