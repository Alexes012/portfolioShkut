import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts} id='item-3'>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Контакты</span>
                <form className={styles.formWrapper}>
                    <input className={styles.formArea} type='text' placeholder='Имя'/>
                    <input className={styles.formArea} type='text' placeholder='E-mail'/>
                    <textarea className={styles.messageArea} placeholder='Ваше сообщение'></textarea>
                    <button className={styles.btnSubmit} type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;