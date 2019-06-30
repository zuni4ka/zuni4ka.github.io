import React from 'react';
import {ReactComponent as Icon} from './icon.svg';
import cx from 'classnames';
import * as styles from './index.module.css';

const Anchor = ({
    children,
    className,
    ...props
}) => {
    const isExternal = props.target === "_blank";
    const isText = props.type === 'text';

    return (
        <a
            className={cx(className, {
                [styles.anchor__text]: isText,
            })}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            {...props}
        >
            {children}
            {isExternal &&
            isText &&
            <Icon className={styles.icon} />}
        </a>
    );
};

export default Anchor;
