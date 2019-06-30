import React from 'react';
import Content from '../content';
import * as styles from './index.module.css';

function Contacts() {
    return (
        <Content className={styles.content}>
            <a
                className={styles.contacts_link}
                href="https://github.com/zuni4ka"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M512 256c0 9.644-.533 19.163-1.578 28.536-.115 1.045-.23 2.1-.355 3.145a260.565 260.565 0 0 1-2.456 15.778 133.643 133.643 0 0 1-.596 3.072c-18.098 90.436-83.832 163.652-169.942 192.355-12.978 2.508-17.586-5.465-17.586-12.288 0-8.432.293-35.997.293-70.249 0-23.886-8.182-39.466-17.356-47.407 44.335-4.932 90.425-19.122 108.711-71.471a90.026 90.026 0 0 0 1.045-3.124 129.234 129.234 0 0 0 2.748-9.979c.24-1.034.481-2.079.7-3.145 2.393-11.337 3.689-24.137 3.689-38.599 0-27.941-9.937-50.782-26.352-68.712 2.664-6.447 11.431-32.486-2.508-67.751 0 0-21.462-6.875-70.332 26.248-20.459-5.674-42.371-8.516-64.125-8.62-21.755.104-43.656 2.947-64.084 8.62-48.912-33.123-70.416-26.248-70.416-26.248-13.897 35.265-5.13 61.304-2.476 67.751-16.374 17.93-26.384 40.772-26.384 68.712 0 14.451 1.296 27.251 3.699 38.588.219 1.066.449 2.111.69 3.145a129.47 129.47 0 0 0 3.804 13.113c18.275 52.255 64.24 66.644 108.45 71.67-7.325 6.395-13.96 17.69-16.259 34.241-14.608 6.541-51.66 17.847-74.491-21.285 0 0-13.542-24.576-39.246-26.384 0 0-24.984-.324-1.745 15.559 0 0 16.771 7.879 28.421 37.46 0 0 15.026 45.693 86.246 30.208.115 21.389.345 41.556.345 47.658 0 6.76-4.692 14.691-17.492 12.319C88.9 470.235 23.092 397.009 4.984 306.531v-.01a97.26 97.26 0 0 1-.585-3.062 245.69 245.69 0 0 1-2.456-15.778c-.136-1.045-.251-2.09-.366-3.145A257.683 257.683 0 0 1 0 256C0 114.615 114.636 0 256 0c141.375 0 256 114.615 256 256z"
                    />
                    <path
                        d="M94.678 363.698c-1.849-.878-3.856-.512-4.409.794-.596 1.275.439 3.009 2.299 3.845 1.829.878 3.824.502 4.389-.773.647-1.275-.419-3.03-2.279-3.866zM106.6 373.802c-1.682-1.776-3.992-2.309-5.245-1.181-1.243 1.149-.93 3.542.742 5.319 1.62 1.787 4.012 2.32 5.235 1.191 1.275-1.15.94-3.522-.732-5.329zM117.457 387.709c-1.609-2.257-4.138-3.239-5.716-2.152-1.609 1.097-1.609 3.824-.042 6.102 1.588 2.278 4.148 3.302 5.726 2.205 1.599-1.108 1.599-3.845.032-6.155zM129.849 401.575c-2.205-2.1-5.214-2.529-6.635-.982-1.4 1.546-.784 4.483 1.452 6.541 2.194 2.111 5.183 2.529 6.583.982 1.495-1.536.816-4.482-1.4-6.541zM146.139 411.136c-2.926-.909-5.82.042-6.416 2.058-.585 2.027 1.306 4.378 4.2 5.256 2.905.846 5.778-.063 6.405-2.069.597-2.037-1.294-4.367-4.189-5.245zM165.742 414.187c-3.062.052-5.465 1.776-5.465 3.908.031 2.079 2.508 3.793 5.569 3.72 3.041-.031 5.507-1.787 5.433-3.897.001-2.09-2.497-3.794-5.537-3.731zM190.777 414.605c-.387-2.1-3.103-3.333-6.123-2.811-2.978.543-5.13 2.664-4.754 4.775.376 2.038 3.124 3.312 6.102 2.769 3.02-.564 5.131-2.674 4.775-4.733z"
                    />
                </svg>
            </a>
            <a
                className={styles.contacts_link}
                href="mailto:mari.plieshka@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M257 210c-24.814 0-45 20.186-45 45s20.186 45 45 45 45-20.186 45-45-20.186-45-45-45z"
                    />
                    <path
                        d="M255 0C114.39 0 0 114.39 0 255s114.39 257 255 257 257-116.39 257-257S395.61 0 255 0zm107 330c-20.273 0-38.152-10.161-49.017-25.596C299.23 319.971 279.354 330 257 330c-41.353 0-75-33.647-75-75s33.647-75 75-75c16.948 0 32.426 5.865 45 15.383V195c0-8.291 6.709-15 15-15s15 6.709 15 15v75c0 16.538 13.462 30 30 30s30-13.462 30-30c0-100.391-66.432-150-135-150-74.443 0-135 60.557-135 135s60.557 135 135 135c30 0 58.374-9.609 82.061-27.803 15.822-12.078 33.94 11.765 18.281 23.789C328.353 408.237 293.665 420 257 420c-90.981 0-165-74.019-165-165S166.019 90 257 90c82.897 0 165 61.135 165 180 0 33.091-26.909 60-60 60z"
                    />
                </svg>
            </a>
            <a
                className={styles.contacts_link}
                href="https://www.linkedin.com/in/maria-plieshka-1789401b/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.32 291.32">
                    <path
                        d="M145.66 0c80.45 0 145.66 65.22 145.66 145.66S226.1 291.32 145.66 291.32 0 226.1 0 145.66 65.21 0 145.66 0z"
                    />
                    <path
                        d="M82.08 200.14h27.27v-90.91H82.08v90.9zm106.26-94.06c-13.24 0-25.08 4.83-33.49 15.5v-12.65h-27.37v91.2h27.38v-49.32c0-10.42 9.55-20.59 21.5-20.59s14.92 10.17 14.92 20.34v49.57h27.27v-51.6c0-35.84-16.97-42.45-30.21-42.45zm-92.75-5.94a13.66 13.66 0 1 0-.01-27.32 13.66 13.66 0 0 0 0 27.32z"
                        fill="#ffffff"
                    />
                </svg>
            </a>
        </Content>
    );
}

export default Contacts;
