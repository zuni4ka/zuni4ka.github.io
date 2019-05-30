import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';

import Entrance from './entrance';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Entrance />
    </HashRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
