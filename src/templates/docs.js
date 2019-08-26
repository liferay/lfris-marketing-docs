import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import SimpleFooter from '../components/SimpleFooter';
import Sidebar from '../components/Sidebar';
import LayoutNav from '../components/LayoutNav';
import CodeTabs from '../components/CodeTabs';
import CodeClipboard from '../components/CodeClipboard';

import Auth from '../components/Auth'

export default class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarToggled: false
		}
    }

    componentDidMount() {
        this._codeTabs = new CodeTabs();
        this._codeClipboard = new CodeClipboard();
    }

    componentWillUnmount() {
        this._codeTabs = null;
        this._codeClipboard.dispose();
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
                <div className="docs">
                    <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={excerpt} />
                        <meta name="og:description" content={excerpt} />
                        <meta name="twitter:description" content={excerpt} />
                        <meta name="og:title" content={title} />
                        <meta name="og:type" content="article" />
                        <meta name="twitter.label1" content="Reading time" />
                        <meta
                            name="twitter:data1"
                            content={`${timeToRead} min read`}
                        />
                    </Helmet>

                    <header>
                        <LayoutNav effect={true} static={true} sidebarHamburguerIcon={true} onNavbarToggleClick={this.docsNavbarToggleClick.bind(this)} />
                    </header>

                    <main className="content">
                        <Sidebar location={location} navbarToggled={this.state.navbarToggled} />
                        <div className="sidebar-offset">
                            <header>
                                <div className="clay-site-container container-fluid">
                                    <h1>{title}</h1>
                                </div>
                            </header>

                            <div className="clay-site-container container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <article dangerouslySetInnerHTML={{__html: html}}>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            <SimpleFooter editContentURL={process.env.EDIT_CONTENT_URL} issuesURL={process.env.ISSUES_URL} slug={this.props["*"]}/>
                        </div>
                    </main>
                </div>
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