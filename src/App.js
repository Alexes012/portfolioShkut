import React from 'react';
import './App.css';
import NavBarMenu from "./components/navBarMenu/NavBarMenu";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Slogan from "./components/slogan/Slogan";
import Contacts from "./components/contacts/Contacts";


class App extends React.Component {

  render() {

    return (
        <div className="App">
          <div className="portfolio">
            <NavBarMenu/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
          </div>
        </div>
    );
  }
}

export default App;
