import React from 'react';
import styles from './Projects.module.css';
import Project from "./project/Project";
import Separator from "../../helpComponent/separator/Separator";

function Projects() {
    return (
        <div className={styles.projects} id='item-2'>
            <div className={styles.containerForAll}>
                <Separator name="Проекты"/>
                <div className={styles.container}>
                    <span className={styles.blockTitle}>Проекты</span>
                    <div className={styles.projectsWrapper}>
                        <Project
                            btn={<a href="https://alexes012.github.io/counterFull/">Смотреть</a>}
                        />
                        <Project
                            btn={<a href="">Смотреть</a>}
                        />
                        <Project
                            btn={<a href="">Смотреть</a>}
                        />
                        <Project
                            btn={<a href="">Смотреть</a>}
                        />
                        <Project
                            btn={<a href="">Смотреть</a>}
                        />
                        <Project
                            btn={<a href="">Смотреть</a>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;