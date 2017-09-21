import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import App from './components/App';
import FormClients from './components/FormSearch/FormClients';
import FormAccounts from './components/FormSearch/FormAccounts';
import FormCard from './components/FormSearch/FormCard';
import FormAccountSingle from './components/FormSearch/FormAccountSingle';

import NotFound from './components/NotFound';

import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="clients"/>
                <Route path="/clients" component={FormClients}/>
                <Route path="/accounts" component={FormAccounts}/>
                <Route path="/card" component={FormCard}/>
                <Route path="/account-single" component={FormAccountSingle}/>
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    </Provider>,
    document.getElementById('app')
);