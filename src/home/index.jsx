import React from 'react';
import * as styles from './index.module.css';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.introduce}>
        <img
          className={styles.portrait}
          src={require('./profile.jpg')}
          alt="Maria Plieshka portrait"
        />
        <p className={styles.description}>
          Currently I am acvively immersing myself into the world of Frontend.
          I am looking for a job opportunities in Berlin.
          I would be happy to learn more, to work in a strong friendly team and bring some fresh ideas to it.
          You can find out a bit more about me by visiting the additional pages of this site :)
        </p>
      </div>
      <footer className={styles.footer}>
        <a
          className={styles.footer_link}
          href="/contacts"
        >
          Contacts
         </a>
        <a
          className={styles.footer_link}
          href="/contacts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </main>
  );
}

export default App;
