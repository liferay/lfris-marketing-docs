import React from 'react';
import styles from './styles.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                © 2019 LIFERAY INC. ALL RIGHTS RESERVED
            </div>
        </div>
    );
}

export default Footer;