import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import '../index.css'; // order is matter

import Navigation from '../navigation';
import Header from '../header';
import Home from '../home';
import Certificates from '../certificates';
import Portfolio from '../portfolio';
import Contacts from '../contacts';

import * as styles from './index.module.css';

const Entrance = () => {
    return (
        <div className={styles.entrance}>
            <Header>
                <Navigation />
            </Header>
            <main className={styles.main}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/certificates" component={Certificates} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contacts" component={Contacts} />
                </Switch>
            </main>
        </div>
    );
};

export default Entrance;
