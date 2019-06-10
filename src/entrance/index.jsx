import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import '../index.css'; // order is matter

import * as styles from './index.module.css';

import Footer from '../footer';
import Home from '../home';
import Certificates from '../certificates';
import Portfolio from '../portfolio';
import Contacts from '../contacts';

const Entrance = () => {
    return (
        <main className={styles.main}>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/certificates" component={Certificates}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contacts" component={Contacts}/>
            </Switch>
            <Footer />
        </main>
    );
};

export default Entrance;