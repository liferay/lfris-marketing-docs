import Footer from '../components/Footer';
import LayoutNav from '../components/LayoutNav';
import React from 'react';
import { withPrefix } from 'gatsby';
import styles from './styles.module.scss';

const ErrorPage = ({ location }) => (
    <div className="error-page">
        <main className="content">
            <header className="header">
                <LayoutNav effect={true} static={true} sidebarHamburguerIcon={true} />
            </header>

            <div className={`container-fluid container-fluid-max-lg ${styles.container}`}>
                <img className={`image-fluid ${styles.img}`} alt="not found" src={withPrefix("images/404_Illustration.jpg")}></img>
            </div>

            <section className={styles.footerContainer}>
                <Footer />
            </section>
        </main>
    </div>
);

export default ErrorPage;