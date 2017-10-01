import React from 'react';

import './App.less';

import Management from './Management';
import Header from './Header';
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

                <Management />

                <Header />

                {this.props.children}

                <ResultList />

                <Footer />
                
            </div>
        );
    }
}

App.displayName = 'App';

export default App;
