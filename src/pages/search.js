import React from 'react';
import { Auth, Search } from 'components/molecules'
import { getUserAuthentication } from 'services/auth';

class search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: getUserAuthentication()
		}
	}

    render() {
		let needsAuth = true;

		if (process.env.NODE_ENV === 'development') {
			needsAuth = false;
		}

        return (
				<Auth needsAuth={needsAuth}>
					<Search location={this.props.location} childClass="searchPage" />	
				</Auth>
    )};
}

export default search;
