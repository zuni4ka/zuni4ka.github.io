import React from 'react';
import * as styles from './index.module.css';

function Certificates() {
  return (
    <div className={styles.introduce}>
      <p className={styles.description}>
        There are my certificates that I received from the
          <a
          className={styles.text_link}
          href="https://htmlacademy.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HTML Academy
          </a>
        after I sucessfully defended my projects.
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
    </div>
  );
}

export default Certificates;
