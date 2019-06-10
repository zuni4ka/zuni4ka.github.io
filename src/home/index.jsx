import React from 'react';
import * as styles from './index.module.css';

function Home() {
  return (
      <div className={styles.introduce}>
        <img
          className={styles.portrait}
          src={require('./profile.jpg')}
          alt="Maria Plieshka portrait"
        />
        <div className={styles.description}>
          Hello world! My name is Maria.
          <p>
            I had been working as an Market Research Analyst for 5 years before I moved to Berlin. I loved my job and my colleagues, but I felt that in this work I lack something, some kind of creative component.
            So after move I decided to switch to a new profession.
            <br />
            Currently I'm acvively immersing myself into the world of Frontend. And I love it.
            I've successfully finished two courses in HTML Academy which are Professional HTML/CSS and JavaScript at HTML Academy.
            Now I am gradually learning ReactJS and looking for a job opportunities as a Frontend Developer in Berlin.
            I would be happy to learn more, to work in a strong friendly team and bring some fresh ideas to it.
          </p>
        </div>
      </div>
  );
}

export default Home;
