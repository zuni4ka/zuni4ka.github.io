import React from 'react';
import {NavLink} from 'react-router-dom';
import * as styles from './index.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <NavLink
                className={styles.footer_link}
                activeClassName={styles.footer_link__active}
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                className={styles.footer_link}
                activeClassName={styles.footer_link__active}
                to="/certificates"
            >
                Certificates
            </NavLink>
            <NavLink
                className={styles.footer_link}
                activeClassName={styles.footer_link__active}
                to="/portfolio"
            >
                Portfolio
            </NavLink>
            <NavLink
                className={styles.footer_link}
                activeClassName={styles.footer_link__active}
                to="/contacts"
            >
                Contacts
            </NavLink>
            <a
                className={styles.footer_link}
                href="https://github.com/zuni4ka"
                target="_blank"
                rel="noopener noreferrer"
            >
                Github
            </a>
        </footer>
    );
};

export default Footer;