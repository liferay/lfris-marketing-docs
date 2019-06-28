import React from 'react';
import { withPrefix } from 'gatsby';
import Sidebar from '../components/Sidebar';

const ErrorPage = ({ location }) => (
    <>
        <div className="container-fluid container-fluid-max-lg">
            <img className="image-fluid" alt="not found" src={withPrefix("images/ray.png")}></img>
            <h1 className="h1">Not Found</h1>

            <Sidebar location={location} navbarToggled={ true } />
        </div>
    </>
);

export default ErrorPage;