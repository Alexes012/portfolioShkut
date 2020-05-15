import React from 'react';
import styles from './Skills.module.css';
import Skill from "./skill/Skill";
import html from "../../images/html-5.svg";
import css from "../../images/css.svg";
import javascript from "../../images/javascript.svg";
import typeScript from "../../images/typescript.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";

function Skills() {
    return (
        <div className={styles.skills} id='item-1'>
            <div className={styles.containerForAll}>
                <div className={styles.separator}>
                    <div className={styles.theme}>Навыки</div>
                </div>
                <div className={styles.container}>
                    <span className={styles.blockTitle}>Навыки</span>
                    <div className={styles.skillsWrapper}>
                        <Skill
                            icon={<img src={html}/>}
                            name="HTML5"
                            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae quam ullam."
                        />
                        <Skill
                            icon={<img src={css}/>}
                            name="CSS"
                            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae quam ullam."
                        />
                        <Skill
                            icon={<img src={javascript}/>}
                            name="JavaScript"
                            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae quam ullam."
                        />
                        <Skill
                            icon={<img src={typeScript}/>}
                            name="TypeScript"
                            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae quam ullam."
                        />
                        <Skill
                            icon={<img src={react}/>}
                            name="React"
                            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae quam ullam."
                        />
                        <Skill
                            icon={<img src={redux}/>}
                            name="Redux"
                            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae quam ullam."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Skills;