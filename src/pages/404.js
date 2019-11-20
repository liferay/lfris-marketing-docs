import React from 'react';
import { MainLayout } from 'components/layouts'
import { withPrefix } from 'gatsby';

const ErrorPage = ({ location }) => (
    <MainLayout className="error-page" location={location}>    
        <img alt="not found" src={withPrefix("images/404_Illustration.jpg")}></img>
       </MainLayout>
);

export default ErrorPage;