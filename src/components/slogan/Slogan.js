import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.containerForAll}>
                {/*<div className={styles.separator}>*/}
                {/*    <div className={styles.theme}>Резюме</div>*/}
                {/*</div>*/}
                {/*<span className={styles.blockTitle}>Резюме</span>*/}
                <div className={styles.container}>
                    <h1>Являюсь выпускником it-incubator.by</h1>
                    <div className={styles.button}>
                        <button>СКАЧАТЬ РЕЗЮМЕ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
