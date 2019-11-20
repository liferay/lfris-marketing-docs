import React from 'react';
import { Auth, Search } from 'components/molecules'
import { getUserAuthentication } from 'services/auth';
import { MainLayout } from 'components/layouts'

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
			<MainLayout className="search-page" location={this.props.location}>
				<Auth needsAuth={needsAuth}>
					<Search location={this.props.location} childClass="searchPage" />	
				</Auth>
			</MainLayout>
    )};
}

export default search;
