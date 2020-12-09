import React from 'react';
import styles from './Projects.module.css';
import Project from "./project/Project";
import Separator from "../../helpComponent/separator/Separator";
import counter from '../../images/counterFull.jpg'
import noproject from '../../images/noProject.png'
import calculator from '../../images/calculator.png'
import dots from "../../images/dots.png";
import todolistIMG from "../../images/todolistIMG.png"
import oldmouse from "../../images/sait.png"

function Projects() {
    return (
        <div className={styles.projects} id='item-2'>
            <img className={styles.dots} src={dots}/>
            <div className={styles.containerForAll}>
                <Separator name="Проекты"/>
                <div className={styles.container}>
                    <span className={styles.blockTitle}>Проекты</span>
                    <div className={styles.projectsWrapper}>
                        <Project
                            btn={<a href="https://alexes012.github.io/counterFull/">Смотреть</a>}
                            image={counter}
                        />
                        <Project
                            btn={<a href="https://alexes012.github.io/calculator/">Смотреть</a>}
                            image={calculator}
                        />
                        <Project
                            btn={<a href="https://alexes012.github.io/todolist-ready">Смотреть</a>}
                            image={todolistIMG}
                        />
                        <Project
                            btn={<a href="http://oldmouse.by/">Смотреть</a>}
                            image={oldmouse}
                        />
                        <Project
                            btn={<a href="">Смотреть</a>}
                            image={noproject}
                        />
                        <Project
                            btn={<a href="">Смотреть</a>}
                            image={noproject}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;