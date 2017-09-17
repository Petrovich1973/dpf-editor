import React from 'react';

import './App.less';

import Header from './Header';
import FormSearch from './FormSearch';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <Header />
                <FormSearch />
                <Footer />
            </div>
        );
    }
}

App.displayName = 'App';

export default App;
