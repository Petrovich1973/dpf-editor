import React from 'react';

import './App.less';

import Header from './Header';

import FormSearch from './FormSearch';
import ResultList from './ResultList';

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

                <FormSearch formComponent={this.props.children} />

                <ResultList/>

                <Footer />
                
            </div>
        );
    }
}

App.displayName = 'App';

export default App;
