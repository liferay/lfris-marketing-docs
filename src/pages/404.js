import React from 'react';
import { withPrefix } from 'gatsby';

const ErrorPage = ({ location }) => (
        <img alt="not found" src={withPrefix("images/404_Illustration.jpg")}></img>
);

export default ErrorPage;