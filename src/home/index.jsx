import React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './index.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.introduce}>
        <img
          className={styles.portrait}
          src={require('./profile.jpg')}
          alt="Maria Plieshka portrait"
        />
        <p className={styles.description}>
          Hello world! My name is Maria.
          <p>
            I'm Currently I'm acvively immersing myself into the world of Frontend.
            I've successfully finished two courses in HTML Academy which are: 
              <a
              className={styles.text_link}
              href="./course_1.jpg"
              >
            Professional HTML/CSS
              </a>
            and 
              <a
              className={styles.text_link}
              href="./course_2.jpg"
              >
            JavaScript
              </a>
            .
            Now I am gradually learning ReactJS and looking for a job opportunities.
            I would be happy to learn more, to work in a strong friendly team and bring some fresh ideas to it.
          </p>
        </p>
      </div>
      <footer className={styles.footer}>
        <Link
          className={styles.footer_link}
          to="/contacts"
        >
          Contacts
        </Link>
        <a
          className={styles.footer_link}
          href="https://github.com/zuni4ka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </main>
  );
}

export default Home;
