import React from 'react';
import { Link, withPrefix, graphql } from 'gatsby';

import { Login, Search } from 'components/molecules';
import styles from './styles.module.scss'

const LayoutNav = ({ siteTitle, search }) => {
    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.titleContainer}>
                <img className={styles.logo} src={withPrefix("/images/home/liferay_logo.svg")} alt="Liferay Logo" />

                <h1 className={styles.navTitle}>{siteTitle}</h1>
            </Link>

            {/* { search ? <Search  /> : ''} */}

            <Login />
        </nav>
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

export default LayoutNav;