import React from 'react';
import {Layout, Row, Col} from 'antd';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import About from '../info/About.jsx';
import Privacy from '../info/Privacy.jsx';
import Terms from '../info/Terms.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Center from './Center.jsx';

import styles from './Main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Layout theme='light'>
                    <Layout.Header className={styles.header}>
                        <Header />
                    </Layout.Header>
                    <Layout.Content className={styles.content}>
                        <Switch>
                            <Route exact path='/' component={Center}></Route>
                            <Route path='/about' component={About}></Route>
                            <Route path='/privacy' component={Privacy}></Route>
                            <Route path='/terms' component={Terms}></Route>
                        </Switch>
                    </Layout.Content>
                    <Layout.Footer className={styles.footer}>
                        <Footer />
                    </Layout.Footer>
                </Layout>
            </Router>
        );
    }
}


export default Main;
