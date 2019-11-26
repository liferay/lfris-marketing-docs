import React from 'react';
import { Search } from 'components/molecules'
import { getUserAuthentication } from 'services/auth';

class search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: getUserAuthentication()
		}
	}

    render() {
        return (
			<Search location={this.props.location} childClass="searchPage" />	
		)
	};
}

export default search;
