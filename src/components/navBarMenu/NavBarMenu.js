import React from 'react';
import styles from './NavBarMenu.module.css';
import {NavLink} from "react-router-dom";

class NavBarMenu extends React.Component {

    render() {

        return (
            <div className={this.props.state.isHidden ? styles.headerShow : styles.header}>
                <div className={styles.containerForImg}>
                    <div className={styles.buttonTopRight}>
                        <button onClick={() => {
                            this.props.onOpenClick()
                        }}> {this.props.state.isHidden ? "<" : ">"}</button>
                    </div>

                    <div className={styles.photo}/>
                </div>

                <div className={styles.containerForMenu}>
                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/main">Главная</NavLink>
                        </div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/about">Визитка</NavLink>
                        </div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/skills">Навыки</NavLink>
                        </div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/projects">Проекты</NavLink>
                        </div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/contacts">Контакты</NavLink>
                        </div>
                    </div>
                </div>

                <div className={styles.containerForFooter}>
                    <span>© 2020 Все права защищены</span>
                    {/*<div className={styles.langueges}>*/}
                    {/*    <button>*/}
                    {/*        RU*/}
                    {/*    </button>*/}
                    {/*    <button>*/}
                    {/*        EN*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default NavBarMenu;