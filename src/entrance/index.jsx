import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import '../index.css'; // order is matter

import Home from '../home';

const Entrance = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/portfolio" component={() => 2} />
            <Route path="/contacts" component={() => 3} />
        </Switch>
    );
};

export default Entrance;