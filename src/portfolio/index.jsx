import React from 'react';
import * as styles from './index.module.css';

function Portfolio() {
  return (
    <div className={styles.introduce}>
    <a
      className={styles.certificate_link}
      target="_blank"
      href="https://zuni4ka.github.io/sedona/"
      rel="noopener noreferrer"
    >
      <img
        className={styles.certificate_img}
        src={require('./project_1.jpg')}
        alt="Professional HTML and CSS course project"
      />
    </a>
    <a
      className={styles.certificate_link}
      target="_blank"
      href="https://zuni4ka.github.io/candyshop/"
      rel="noopener noreferrer"
    >
      <img
        className={styles.certificate_img}
        src={require('./project_2.jpg')}
        alt="Professional JavaScript course project"
      />
    </a>
  </div>
);
}

export default Portfolio;
