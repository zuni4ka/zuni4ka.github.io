import React from 'react';
import * as styles from './App.module.css';

function App() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello world!</h1>
      <h2>My name is Maria.</h2>
      <img src="../images/MyPhoto.jpg">My photo</img>
      <article>
        <p>Currently I am acvively immersing myself into the world of FrontEnd.</p>
        <p>I am looking for a job opportunities in Berlin.</p>
        <p>I would be happy to learn more, to work in a strong friendly team and bring some fresh ideas to it.</p>
        <p>You can find out a bit more about me by visiting the additional pages of this site :)</p>
      </article>  
    </main>
  );
}

export default App;
