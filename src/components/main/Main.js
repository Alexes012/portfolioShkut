import React from 'react';
import styles from './Main.module.css';
import instagram from '../../images/instagram.png'
import vk from '../../images/vk.png'
import linkedin from '../../images/linkedin.png'
import telegramm from '../../images/telegram.png'
import github from '../../images/dribble.png'

class Main extends React.Component {


    render() {
        return (
            <div className={styles.main} id='item-0'>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                    <span className={styles.myname}>
                        Привет! Я <span>Алексей Шкут</span>
                    </span>
                        <span className={styles.developer}>
                        Я front-end разработчик. Если вас заинтересовало мое портфолио - свяжитесь со мной!
                    </span>
                        <div className={styles.socialBlock}>
                            <a className={styles.socialIcon} href="https://www.instagram.com/mr.shkut/">
                                <img src={instagram}/>
                            </a>
                            <a className={styles.socialIcon} href="https://vk.com/mr.shkut">
                                <img src={vk}/>
                            </a>
                            <a className={styles.socialIcon} href="https://t.me/mr_shkut">
                                <img src={telegramm}/>
                            </a>
                            <a className={styles.socialIcon}
                               href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%88%D0%BA%D1%83%D1%82-aa41281a7/">
                                <img src={linkedin}/>
                            </a>
                            <a className={styles.socialIcon} href="https://github.com/Alexes012">
                                <img src={github}/>
                            </a>
                        </div>
                        {/*<div className={styles.button1}>*/}
                        {/*    <button>СКАЧАТЬ РЕЗЮМЕ</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;