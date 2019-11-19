import React from 'react';
import styles from './styles.module.scss';
import { Footer, LayoutNav } from 'components/organisms';
import { withPrefix } from 'gatsby';

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