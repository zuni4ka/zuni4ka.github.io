import React from 'react';
import Content from '../content';
import * as styles from './index.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <Content className={styles.content}>
                <svg viewBox="0 0 10 10" className={styles.z}>
                    <path d="M1,1 L8,2 L2,8 L9,8" />
                </svg>
                {props.children}
            </Content>
        </header>
    );
};

export default Header;
