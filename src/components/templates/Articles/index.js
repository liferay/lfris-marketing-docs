import {graphql} from 'gatsby';
import React from 'react';

import {Sidebar} from 'components/organisms';
import styles from './styles.module.scss';

export default class Docs extends React.Component {
	render() {
		const {data} = this.props;
		const {
			markdownRemark: {html}
		} = data;

		return (
			<div className='row w-100'>
				<Sidebar className='col-md-3' location={this.props.location} />
				<div className={`col-md-9 padding-top-1_5 ${styles.article}`}>
					<article dangerouslySetInnerHTML={{__html: html}}></article>
				</div>
			</div>
		);
	}
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			fields {
				needsAuth
			}
		}
	}
`;
