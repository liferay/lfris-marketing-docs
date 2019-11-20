import React from 'react';
import { Auth } from 'components/molecules'
import { LayoutNav, Sidebar, SimpleFooter} from 'components/organisms';
import { MainLayout } from 'components/layouts'
import { graphql } from 'gatsby';
import {Helmet} from 'react-helmet';

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
            <MainLayout className="docs">
                <Auth needsAuth={needsAuth}>
                    <Sidebar location={location} navbarToggled={this.state.navbarToggled} />
                        <div className="sidebar-offset">
                            <div className="clay-site-container container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <article dangerouslySetInnerHTML={{__html: html}}>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Auth>
            </MainLayout>
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