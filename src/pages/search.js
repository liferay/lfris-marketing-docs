import React from 'react';
import { Search } from 'components/molecules'

class search extends React.Component {
	constructor(props) {
		super(props)
	}

    render() {
        return (
			<section className="max-width-medium">
				<Search
					entryNumber={100}
					location={this.props.location}
					onPageSearch={true}
				/>	
			</section>
		)
	};
}

export default search;
