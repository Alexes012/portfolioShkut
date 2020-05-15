import React from 'react';
import styles from './Projects.module.css';
import Project from "./project/Project";

function Projects() {
    return (
        <div className={styles.projects} id='item-2'>
            <div className={styles.containerForAll}>
                <div className={styles.separator}>
                    <div className={styles.theme}>Проекты</div>
                </div>
                <div className={styles.container}>
                    <span className={styles.blockTitle}>Проекты</span>
                    <div className={styles.projectsWrapper}>
                        <Project
                            link={<a href="">Смотреть</a>}
                            name=""
                        />
                        <Project
                            link={<a href="">Смотреть</a>}
                            name=""
                        />
                        <Project
                            link={<a href="">Смотреть</a>}
                            name=""
                        />
                        <Project
                            link={<a href="">Смотреть</a>}
                            name=""
                        />
                        <Project
                            link={<a href="">Смотреть</a>}
                            name=""
                        />
                        <Project
                            link={<a href="">Смотреть</a>}
                            name=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;