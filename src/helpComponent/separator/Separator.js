import React from 'react';
import styles from './Separator.module.css';

function Separator(props) {
    return (
        <div className={styles.separator}>
            <div className={styles.blockTheme}>
                <div className={styles.theme}>{props.name}</div>
            </div>
        </div>
    );
}

export default Separator;