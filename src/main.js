import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import FormSearch from './components/FormSearch';
import Header from './components/Header';

import store from "./store";

ReactDOM.render(
    <Provider store={store}>
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
				<IndexRoute component={FormSearch}/>linktest
				<Route path="/linktest" component={ Header } />
			</Route>
		</Router>
    </Provider>,
    document.getElementById('app')
);