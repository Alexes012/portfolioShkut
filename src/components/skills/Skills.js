import React from 'react';
import styles from './Skills.module.css';
import Skill from "./skill/Skill";
import html from "../../images/html-5.svg";
import css from "../../images/css.svg";
import javascript from "../../images/javascript.svg";
import typeScript from "../../images/typescript.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import Separator from "../../helpComponent/separator/Separator";

function Skills() {
    return (
        <div className={styles.skills} id='item-1'>
            <div className={styles.containerForAll}>
                <Separator name="Навыки"/>
                <div className={styles.container}>
                    <span className={styles.blockTitle}>Навыки</span>
                    <div className={styles.skillsWrapper}>
                        <Skill
                            icon={<img src={html}/>}
                            name="HTML5"
                            discription="Знаю базовые принципы и понятия, теги, атрибуты."
                        />
                        <Skill
                            icon={<img src={css}/>}
                            name="CSS"
                            discription="Умею верстать на гридах и флексах, работать с медиазапросами."
                        />
                        <Skill
                            icon={<img src={javascript}/>}
                            name="JavaScript"
                            discription="Применял на практике стрелочные функции, методы массивов, замыкания, промисы, контекст вызова, глубокое копирование."
                        />
                        <Skill
                            icon={<img src={typeScript}/>}
                            name="TypeScript"
                            discription=""
                        />
                        <Skill
                            icon={<img src={react}/>}
                            name="React"
                            discription="Работал с функциональными и классовыми компонентами. Использовал хуки, локальный стейт. Работал с запросами на сервак."
                        />
                        <Skill
                            icon={<img src={redux}/>}
                            name="Redux"
                            discription="Применял в проектах HOC. Использовал mapStateToProps и mapDispatchToProps, thunks. Знаю REST API."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Skills;