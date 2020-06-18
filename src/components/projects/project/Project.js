import React from 'react';
import styles from './Project.module.css';

function Project(props) {
    return (
        <div className={styles.container}>
            <div className={styles.project}>
                <div className={styles.projectImg}>
                    <div className={styles.btnShow}>
                        <div className={styles.button}>{props.btn}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;