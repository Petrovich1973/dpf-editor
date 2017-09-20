import React from 'react';
import { Link } from 'react-router';

import './App.less';

import Header from './Header';
import FormSearch from './FormSearch';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    render() {
        return (
            <div id="App">
                <Header />
				<Link to="/linktest" activeClassName="active">linktest</Link>
                <FormSearch/>
                { this.props.children }
                <Footer />
            </div>
        );
    }
}

App.displayName = 'App';

export default App;
