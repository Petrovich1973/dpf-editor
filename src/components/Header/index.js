import React from 'react';

import './Header.less';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    render() {
        return (
            <div className="screen" id="Header">
                <h2 className="title">Редактор вкладов</h2>
            </div>
        );
    }
}

Header.displayName = 'Header';

export default Header;