import React from 'react';

import './Pagination.less';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    render() {
        return (
            <div className="pagination">
                <div>5 из 120</div>
                <ul>
                    <li className="setCurrent">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li className="dotted">...</li>
                    <li>24</li>
                </ul>
            </div>
        );
    }
}

Pagination.displayName = 'Pagination';

export default Pagination;