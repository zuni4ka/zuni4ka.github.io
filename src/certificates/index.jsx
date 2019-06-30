import React from 'react';
import Anchor from '../anchor';
import Content from '../content';
import * as styles from './index.module.css';

function Certificates() {
    return (
        <Content className={styles.content}>
            <p className={styles.description}>
                There are my certificates that I received from the <Anchor href="https://htmlacademy.ru/" target="_blank" type="text">HTML Academy</Anchor> after I successfully defended my projects.
            </p>
            <img
                className={styles.certificate_img}
                src={require('./course_1.jpg')}
                alt="Professional HTML and CSS course certificate"
            />
            <img
                className={styles.certificate_img}
                src={require('./course_2.jpg')}
                alt="Professional JavaScript course certificate"
            />
        </Content>
    );
}

export default Certificates;
