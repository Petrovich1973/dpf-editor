import React from 'react';

import './NotFound.less';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    render() {
        return (
            <div className="screen">
                NotFound
            </div>
        );
    }
}

NotFound.displayName = 'NotFound';

export default NotFound;