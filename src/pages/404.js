import React from 'react';
import styles from './styles.module.scss';
import { MainLayout } from 'components/layouts'
import { withPrefix } from 'gatsby';

const ErrorPage = ({ location }) => (
    <MainLayout className="error-page">
        <div className={`${styles.container}`}>
            <img className={`${styles.img}`} alt="not found" src={withPrefix("images/404_Illustration.jpg")}></img>
        </div>
    </MainLayout>
);

export default ErrorPage;