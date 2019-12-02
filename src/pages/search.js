import React from 'react';
import { Search } from 'components/molecules'

class search extends React.Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
			<Search location={this.props.location} childClass="searchPage" />	
		)
	};
}

export default search;
