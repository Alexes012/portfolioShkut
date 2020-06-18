import React from 'react';
import styles from './Dots.module.css';
import dots from '../../images/dots.png'

function Dots () {
    return (
        <div className={styles.separator}>
          <img src={dots}/>
        </div>
    );
}

export default Dots;