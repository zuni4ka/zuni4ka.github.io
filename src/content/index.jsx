import React from 'react';
import cx from 'classnames';
import * as styles from './index.module.css';

const Content = (props) => {
    return (
        <div className={cx(styles.content, props.className)}>
            {props.children}
        </div>
    );
};

export default Content;
