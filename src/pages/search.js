import React from 'react';
import { Search } from 'components/molecules'

class search extends React.Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
			<section className="max-width-medium">
				<Search location={this.props.location} childClass="searchPage" />	
			</section>
		)
	};
}

export default search;
