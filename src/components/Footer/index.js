import React from 'react';

import './Footer.less';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    render() {
        return (
            <div className="screen">
                Footer
            </div>
        );
    }
}

Footer.displayName = 'Footer';

export default Footer;