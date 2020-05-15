import React from 'react';
import styles from './Skill.module.css';

function Skill(props) {
    return (
        <div className={styles.container}>
            <div className={styles.skill}>
                <div className={styles.blockIcon}>
                    <div className={styles.icon}>{props.icon}</div>
                </div>
                <span className={styles.skillTitel}>{props.name}</span>
                <span className={styles.discription}>{props.discription}</span>
            </div>
        </div>
    );
}


export default Skill;