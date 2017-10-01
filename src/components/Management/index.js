import React from 'react';
import { connect } from 'react-redux';

//import { updateConfigAccounts } from '../../actions/accountsActions';

@connect((store) => {
    return {
        accounts: store.accounts
    };
})

class Management extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    visibleComponents() {
        console.log(this.props.accounts);
    }

    render() {
        this.visibleComponents();
        return (
            <div />
        );
    }
}

Management.displayName = 'Management';

export default Management;
