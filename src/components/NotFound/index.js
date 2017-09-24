import React from 'react';

import './NotFound.less';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    render() {
        return (
            <div className="screen" id="NotFound">
                <h1><i class="fa fa-exclamation-circle fa-4x" aria-hidden="true"/><br/>404 Not Found</h1>
            </div>
        );
    }
}

NotFound.displayName = 'NotFound';

export default NotFound;