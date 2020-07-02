import React from 'react';
import styles from './Contacts.module.css';
import Separator from "../../helpComponent/separator/Separator";
import phone from '../../images/phone.svg'
import mail from '../../images/mail.svg'
import adress from '../../images/address.svg'
import dots from '../../images/dots.png'

function Contacts() {
    return (
        <div className={styles.contacts}>
            <img className={styles.dots} src={dots}/>
            <div className={styles.containerForAll}>
                <Separator name="Контакты"/>
                <div className={styles.container}>
                    <span className={styles.blockTitle}>Контакты</span>

                    <div className={styles.containerForOther}>
                        <form className={styles.form}>
                            <div className={styles.oneInput}>
                                <input
                                    className={styles.inputIn}
                                    autoComplete="off"
                                    type="text" name={'name'}
                                />
                            </div>
                            <div className={styles.twoInput}>
                                <input
                                    className={styles.inputIn}
                                    autoComplete="off"
                                    name={'email'}
                                />
                            </div>
                            <div className={styles.threeInput}>
                                <input
                                    className={styles.inputIn}
                                    autoComplete="off"
                                    type="text"
                                    name={'phone'}
                                />
                            </div>
                            <div className={styles.fourInput}>
                                <input
                                    className={styles.inputIn}
                                    autoComplete="off"
                                    name={'subject'}
                                />
                            </div>
                            <div className={styles.textarea}>
                                <textarea name={'message'}/>
                            </div>
                            <div className={styles.button}>
                                <button className={styles.btn}>
                                    <span>Отправить</span>
                                </button>
                            </div>
                        </form>

                        <div className={styles.discContainer}>
                            <div className={styles.phoneContainer}>
                                <div className={styles.imgContainer}>
                                    <img src={phone}/>
                                </div>
                                <div className={styles.textContainer}>
                                    +375 (29) 742-84-16
                                </div>
                            </div>
                            <div className={styles.emailContainer}>
                                <div className={styles.imgContainer}>
                                    <img src={mail}/>
                                </div>
                                <div className={styles.textContainer}>
                                    mr.shkut3011@yandex.ru
                                    <div>shkuttv10@gmail.com</div>
                                </div>

                            </div>
                            <div className={styles.locationContainer}>
                                <div className={styles.imgContainer}>
                                    <img src={adress}/>
                                </div>
                                <div className={styles.textContainer}>
                                    Минск, Беларусь
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;