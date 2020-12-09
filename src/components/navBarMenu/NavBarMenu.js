import React from 'react';
import styles from './NavBarMenu.module.css';
import {NavLink} from "react-router-dom";
import photo from "../../images/0429.jpg"

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

                    <div className={styles.photo}><img src={photo}/></div>
                </div>

                <div className={styles.containerForMenu}>
                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/portfolioShkut/main">Главная</NavLink>
                        </div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/portfolioShkut/about">Визитка</NavLink>
                        </div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/portfolioShkut/skills">Навыки</NavLink>
                        </div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/portfolioShkut/projects">Проекты</NavLink>
                        </div>
                    </div>

                    <div className={styles.containerForLink}>
                        <div className={styles.animation}/>
                        <div className={styles.link}>
                            <NavLink to="/portfolioShkut/contacts">Контакты</NavLink>
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