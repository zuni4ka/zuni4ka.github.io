import React from 'react';
import {NavLink} from 'react-router-dom';
import * as styles from './index.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <NavLink
                className={styles.navigation_link}
                activeClassName={styles.navigation_link__active}
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                className={styles.navigation_link}
                activeClassName={styles.navigation_link__active}
                to="/certificates"
            >
                Certificates
            </NavLink>
            <NavLink
                className={styles.navigation_link}
                activeClassName={styles.navigation_link__active}
                to="/portfolio"
            >
                Portfolio
            </NavLink>
            <NavLink
                className={styles.navigation_link}
                activeClassName={styles.navigation_link__active}
                to="/contacts"
            >
                Contacts
            </NavLink>
        </nav>
    );
};

export default Navigation;
