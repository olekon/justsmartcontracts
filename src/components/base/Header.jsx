import React from 'react';
import {Layout, Row, Col} from 'antd';
import {NavLink} from 'react-router-dom';

import styles from './Header.css';
//import logo from '../../../public/logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col span={12}>
                    <p className={styles.headerLogo}>
                        <NavLink to='/'>JustSmartContracts</NavLink>
                    </p>
                </Col>
                <Col span={6} push={5}>
                    <NavLink className={styles.navlink} to='/'>Home</NavLink>
                    <NavLink className={styles.navlink} to='/about'>What is it?</NavLink>
                </Col>
            </Row>
        );
    }
}

export default Header;