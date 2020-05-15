import React from 'react';
import styles from './NavBarMenu.module.css';

class NavBarMenu extends React.Component {

    scrollTo = function(i) {
        let offset = document.getElementById("item-" + i).offsetTop
        // console.log(offset)
        let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
        if (isSafari) {
            if ((offset - document.body.scrollTop) > 0) {
                var call = setInterval(function() {
                    if ((offset - document.body.scrollTop) > 0) {
                        document.body.scrollTop += 10
                    } else {
                        clearInterval(call)
                    }
                }, 1)
            }
            if ((offset - document.body.scrollTop) < 0) {
                var call = setInterval(function() {
                    if ((offset - document.body.scrollTop) < 0) {
                        document.body.scrollTop -= 10
                    } else {
                        clearInterval(call)
                    }
                }, 1)
            }
        } else {
            // console.log(document.documentElement.scrollTop)
            if ((offset - document.documentElement.scrollTop) > 0) {

                var call = setInterval(function() {

                    if ((offset - document.documentElement.scrollTop) > 0) {
                        document.documentElement.scrollTop += 10

                        //document.body.scrollTop += 10
                    } else {
                        clearInterval(call)
                    }
                }, 1)
            }
            if ((offset - document.documentElement.scrollTop) < 0) {
                var call = setInterval(function() {
                    if ((offset - document.documentElement.scrollTop) < 0) {
                        document.documentElement.scrollTop -= 10
                        //document.body.scrollTop += 10
                    } else {
                        clearInterval(call)
                    }
                }, 1)
            }
        }

    };

    render = () => {

        return (
            <div className={styles.header}>
                <div className={styles.containerForImg}>
                    <div className={styles.photo}/>
                </div>

                <div className={styles.containerForMenu}>
                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div onClick={()=>this.scrollTo(0)} className={styles.link}>Главная</div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div onClick={()=>this.scrollTo(1)} className={styles.link}>Навыки</div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div onClick={()=>this.scrollTo(2)} className={styles.link}>Проекты</div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div onClick={()=>this.scrollTo(3)} className={styles.link}>Контакты</div>
                    </div>
                </div>

                <div className={styles.containerForFooter}>
                    <span>© 2020 Все права защищены</span>
                </div>
            </div>
        );
    }
}

export default NavBarMenu;