import React from 'react';
import './App.css';
import NavBarMenu from "./components/navBarMenu/NavBarMenu";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Particles from "react-particles-js";
import {Redirect, Route} from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";


class App extends React.Component {

    state = {
        isHidden: false
    };

    onOpenClick = () => {
        this.setState({isHidden:!this.state.isHidden})
    };

    render() {

        const particlesOption = {
            particles: {
                number: {
                    value: 155,
                    density: {
                        enable: true,
                        value_area: 1500
                    }
                },
                line_linked: { /* связующие линии */
                    "enable": true, /* включено/выключено */
                    "distance": 150, /* расстояние между частицами, при котором проявляется линия */
                    "color": "#646464", /* цвет */
                    "opacity": 0.7, /* прозрачность */
                    "width": 0.9 /* ширина */
                },
            },
            interactivity: { /* интерактивность */
                detect_on: "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
                /* события */
                events: {
                    "onhover": { /* по наведению */
                        "enable": true, /* включено/выключено */
                        "mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
                    },
                    "onclick": { /* по клику */
                        "enable": true, /* включено/выключено */
                        "mode": "push" /* push (добавление новых частиц), remove (удаление частиц),
                     bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
                    }
                },

                "modes": { /* параметры видов событий */
                    "bubble": { /* при onhover или onclick: mode: bubble */
                        "distance": 100, /* расстояние от мышки до частиц, при котором происходит эффект */
                        "size": 40, /* размер увеличения частиц */
                        "duration": 2, /* продолжительность эффекта в секундах при клике */
                        "opacity": 0.2, /* максимальная прозрачность */
                        "speed": 20 /* скорость эффекта */
                    },
                    "repulse": { /* при onhover или onclick: mode: repulse */
                        "distance": 80, /* расстояние отталкивания */
                        "duration": 1 /* продолжительность отталкивания */
                    },
                    "push": { /* при onclick: mode: push */
                        "particles_nb": 0 /* количество добавляемых частиц */
                    },
                }

            }

        };

        return (
            <div className="App">
                <Particles className="Particles" params={particlesOption}/>
                <div className="portfolio">
                    <Redirect  to={'/main'} />
                    <NavBarMenu state={this.state} onOpenClick={this.onOpenClick}/>
                    <Route path='/main' render={() => <Main/>}/>
                    <Route path='/about' render={() => <AboutMe/>}/>
                    <Route path='/skills' render={() => <Skills/>}/>
                    <Route path='/projects' render={() => <Projects/>}/>
                    <Route path='/contacts' render={() => <Contacts/>}/>
                </div>
            </div>
        );
    }
}

export default App;
