import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        accounts: store.accounts
    };
})

class ListAccounts extends React.Component {
	render() {
		return (
			<div className="screen">
				ListAccounts
			</div>
		)
	}
}

ListAccounts.displayName = 'ListAccounts';

export default ListAccounts;