import React from 'react';
import * as styles from './index.module.css';

function Portfolio() {
  return (
    <div className={styles.introduce}>
      <p className={styles.description}>
        <span className={styles.text_expand}>Sedona project:</span> Site of the tourist town in Arizona with the possibility of finding accommodation.
        <br /><span className={styles.text_expand}>Technologies:</span> HTML, CSS, JavaScript.
        <br />
        <br /><span className={styles.text_expand}>Candy shop project:</span> Online store of unusual sweets. Users select the products they like from the list, add them to the cart and can choose delivery/pickup options. The list of products is loaded from the server. User has filtering and sorting options, can add items to the favorites list, option of displaying only favorites and products available in stock. The option of adding to the cart and cart editing is also work, during placing an order all forms are validated, including checking the correctness of filling bank card number (Luna algorithm).
        <br /><span className={styles.text_expand}>Technologies:</span> JavaScript.
      </p>
      <a
        className={styles.project_link}
        target="_blank"
        href="https://zuni4ka.github.io/sedona/"
        rel="noopener noreferrer"
      >
        <img
          className={styles.project_img}
          src={require('./project_1.jpg')}
          alt="Professional HTML and CSS course project"
        />
      </a>
      <a
        className={styles.project_link}
        target="_blank"
        href="https://zuni4ka.github.io/candyshop/"
        rel="noopener noreferrer"
      >
        <img
          className={styles.project_img}
          src={require('./project_2.jpg')}
          alt="Professional JavaScript course project"
        />
      </a>
    </div>
  );
}

export default Portfolio;
