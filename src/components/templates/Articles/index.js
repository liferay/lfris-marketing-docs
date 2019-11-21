import React from 'react';
import { Auth } from 'components/molecules'
import { graphql } from 'gatsby';

export default class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarToggled: false
		}
    }

    docsNavbarToggleClick() {
        this.setState(prevState => ({
            navbarToggled: !prevState.navbarToggled
        }));
    }

    render() {
        const { data, location } = this.props;

        const { markdownRemark: { html, fields: {title, needsAuth}, excerpt, timeToRead } } = data;

        return (
            <Auth needsAuth={needsAuth}>
                <article dangerouslySetInnerHTML={{__html: html}}>
                </article>    
            </Auth>
        );
    }
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            excerpt
            timeToRead
            fields {
                needsAuth
                title
            }
        }
    }
`;