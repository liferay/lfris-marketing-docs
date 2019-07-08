import Footer from '../components/Footer';
import LayoutNav from '../components/LayoutNav';
import React from 'react';
import Sidebar from '../components/Sidebar';
import { withPrefix } from 'gatsby';

const ErrorPage = ({ location }) => (
    <div className="error-page">
        <main className="content">
            <header className="header">
                <LayoutNav effect={true} static={true} sidebarHamburguerIcon={true} />
            </header>

            <div className="container-fluid container-fluid-max-lg">
                <img className="image-fluid" alt="not found" src={withPrefix("images/ray.png")}></img>
                <h1 className="h1">Not Founded</h1>

                {/* <Sidebar location={location} navbarToggled={true} /> */}
            </div>

            <section>
                <Footer />
            </section>
        </main>
    </div>
);

export default ErrorPage;