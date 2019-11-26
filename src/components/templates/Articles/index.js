import React from 'react';
import { graphql } from 'gatsby';

export default class Docs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;

        const { markdownRemark: { html }} = data;

        return (
            <article dangerouslySetInnerHTML={{__html: html}}>
            </article>    
        );
    }
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                needsAuth
            }
        }
    }
`;