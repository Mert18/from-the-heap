import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App.js';
import Join from './auth/Join';

import Activate from './auth/Activate';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/join" component={Join} />
                <Route path="/auth/activate/:token" component={Activate} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;