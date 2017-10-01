import React from 'react';
import { Link } from 'react-router';

import './NotFound.less';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    render() {
        return (
            <div className="screen" id="NotFound">
                <h1>
                    <i className="fa fa-exclamation-circle fa-4x" aria-hidden="true"/>
                    <br/>
                    <span>404 Not Found</span>
                    <br/>
                    <Link className="link" to="/">
                        <i className="fa fa-home fa-2x" />
                    </Link>
                </h1>
            </div>
        );
    }
}

NotFound.displayName = 'NotFound';

export default NotFound;