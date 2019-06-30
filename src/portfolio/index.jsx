import React from 'react';
import Content from '../content';
import Anchor from '../anchor';
import * as styles from './index.module.css';

function Portfolio() {
    return (
        <Content className={styles.content}>
            <section className={styles.section}>
                <h1 className={styles.title}>Candy shop project</h1>
                <p>Online store of unusual sweets</p>
                <div className={styles.subsection}>
                    <div className={styles.subsection_meta}>
                        <dl>
                            <dt>
                                Technologies
                            </dt>
                            <dd>
                                HTML, JavaScript
                            </dd>
                            <dt>
                                Address
                            </dt>
                            <dd>
                                <Anchor
                                    target="_blank"
                                    href="https://zuni4ka.github.io/candyshop"
                                    type="text"
                                >
                                    https://zuni4ka.github.io/candyshop
                                </Anchor>
                            </dd>
                        </dl>
                        <p>
                            Users select the products they like from the list, add them to the cart and can choose
                            delivery/pickup
                            options. The list of products is loaded from the server. User has filtering and sorting
                            options,
                            can
                            add
                            items to the favorites list, option of displaying only favorites and products available in
                            stock.
                            The
                            option of adding to the cart and cart editing is also work, during placing an order all
                            forms
                            are
                            validated, including checking the correctness of filling bank card number (Luna algorithm).
                        </p>
                    </div>
                    <div className={styles.subsection_media__left}>
                        <a
                            className={styles.project_link}
                            target="_blank"
                            href="https://zuni4ka.github.io/candyshop"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={styles.project_img}
                                src={require('./project_2.jpg')}
                                alt="Professional JavaScript course project"
                            />
                        </a>
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h1 className={styles.title}>Sedona project</h1>
                <p>
                    Site of the tourist town in Arizona with the possibility of finding accommodation
                </p>
                <div className={styles.subsection}>
                    <div className={styles.subsection_meta}>
                        <dl>
                            <dt>
                                Technologies:
                            </dt>
                            <dd>
                                HTML, CSS, JavaScript
                            </dd>
                            <dt>
                                Address
                            </dt>
                            <dd>
                                <Anchor
                                    target="_blank"
                                    href="https://zuni4ka.github.io/sedona"
                                    type="text"
                                >
                                    https://zuni4ka.github.io/sedona
                                </Anchor>
                            </dd>
                        </dl>
                        <p>
                            Landing with clean and tricky design, multiple pages, interactive map and booking form.
                        </p>
                    </div>
                    <div className={styles.subsection_media__right}>
                        <a
                            className={styles.project_link}
                            target="_blank"
                            href="https://zuni4ka.github.io/sedona"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={styles.project_img}
                                src={require('./project_1.jpg')}
                                alt="Professional HTML and CSS course project"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </Content>
    );
}

export default Portfolio;
