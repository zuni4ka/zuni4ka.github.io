import React from 'react';
import Content from '../content';
import * as styles from './index.module.css';

function Home() {
    return (
        <Content className={styles.content}>
            <div className={styles.introduce}>
                <img
                    className={styles.portrait}
                    src={require('./profile.jpg')}
                    alt="Maria Plieshka portrait"
                />
                <p className={styles.description}>
                    <span className={styles.description_row}>
                        Hello world! My name is Maria.
                    </span>
                    <span className={styles.description_row}>
                        I had been working as Market Research Analyst for 5 years before move to Berlin. I loved
                        my job and colleagues, but I felt lack of something, some kind of creative
                        component. So after move I decided to switch to a new profession.
                    </span>
                    <span className={styles.description_row}>
                        Currently I'm actively immersing myself into the world of Frontend. And I love it!
                    </span>
                    <span className={styles.description_row}>
                        I've successfully finished professional HTML/CSS and
                        JavaScript courses at HTML Academy.
                        Now I'm in deep dive into React and looking for a job opportunities as Frontend Developer
                        in Berlin.
                    </span>
                    <span className={styles.description_row}>
                        I would be happy to work in a strong friendly team and bring some fresh ideas.
                    </span>
                </p>
            </div>
        </Content>
    );
}

export default Home;
