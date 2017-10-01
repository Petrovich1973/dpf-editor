import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import App from './components/App';
import FormSearch from './components/FormSearch';

import NotFound from './components/NotFound';

import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="search"/>
                <Route path="/search" component={FormSearch} />
            </Route>
            <Route path="**" component={NotFound}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);