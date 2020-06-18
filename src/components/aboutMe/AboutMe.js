import React from "react";
import styles from './AboutMe.module.css'
import Separator from "../../helpComponent/separator/Separator";
import photo from '../../images/myphoto.png'

const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.containerForAll}>
                <Separator name="Визитка"/>
                <div className={styles.container}>
                    <span className={styles.blockTitle}>Визитка</span>

                    <div className={styles.containerForOther}>
                        <div className={styles.containerForPhoto}>
                            <div className={styles.photo}>
                                <img src={photo}/>
                            </div>
                        </div>
                        <div className={styles.containerForText}>
                            <div className={styles.textWrapper}>
                                <div className={styles.name}>Полное имя:</div>
                                <div className={styles.name}>Возраст:</div>
                                <div className={styles.name}>Локация:</div>
                                <div className={styles.name}>Языки:</div>
                                <div className={styles.name}>Профессия:</div>
                                <div className={styles.button}>
                                    <button>Скачать резюме</button>
                                </div>
                            </div>
                            <div className={styles.descriptionWrapper}>
                                <div className={styles.description}>Алексей Шкут</div>
                                <div className={styles.description}>21 год</div>
                                <div className={styles.description}>Минск,Беларусь</div>
                                <div className={styles.description}>Русский,Английский</div>
                                <div className={styles.description}>Front-end разработчик</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe