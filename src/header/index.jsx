import React from 'react';
import {Link} from 'react-router-dom';
import Content from '../content';
import * as styles from './index.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <Content className={styles.content}>
                <Link className={styles.logo} to="/">
                    <svg viewBox="0 0 10 10" className={styles.z}>
                        <path d="M1,1 L8,2 L2,8 L9,8" />
                    </svg>
                </Link>
                {props.children}
            </Content>
        </header>
    );
};

export default Header;
