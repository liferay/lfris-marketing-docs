import Helmet from 'react-helmet';
import React from 'react';
import { Footer, LayoutNav } from 'components/organisms';
import { withPrefix, Link, graphql } from 'gatsby';

const Index = ({ data }) =>  {    
    const description = "Empowering Liferay Marketing";

    return (
        <div className="home">
            <Helmet>
                <title>{process.env.PROJECT_NAME}</title>
                <meta name="description" content={description} />
                <meta name="og:description" content={description} />
                <meta name="twitter:description" content={description} />
                <meta name="og:title" content={process.env.PROJECT_NAME} />
            </Helmet>
            <main className="content">
                <header className="header">
                    <LayoutNav siteTitle={data.site.siteMetadata.title} search={true} />
                </header>

                <section>
                    <Footer />
                </section>
            </main>
        </div>
    );  
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default Index;
