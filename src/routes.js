import React from 'react';
import Auth from './auth';
import Index from './pages/Index';
import Logged from './pages/Logged';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        Auth.isAuthenticated() 
            ? ( <Component {...props} /> )
            : ( <Redirect to={{ pathname: '/', state: {from: props.location} }} /> )
    )} />
)

const Routes = () => (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={Index}/>
            <PrivateRoute path="/app" component={Logged}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;