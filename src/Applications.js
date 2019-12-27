import React, { useState } from "react";
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Modal(props) {
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}

function Project({ projects, openModal }) {
  console.log(openModal)
  const imageUrl = projects.backgroundImage;
  return (
    <Modal>
      <div className="projectsBox">
        <div className="projectName">
          <div style={{ backgroundImage: `url(${imageUrl})` }} className="projectImage"></div>
          <p>{projects.name}</p>
        </div>
        <div className="projectDescriptionDiv">
          <div className="projectDescription">
            <span className="descriptionSpan">Technologies:    </span>
            <p>{projects.technologies}</p>
          </div>
          <div className="projectDescription">
            <span className="descriptionSpan">Description:</span>
            <p>{projects.description}</p>
          </div>
          <div className="projectDescription" id="stack">
            <span className="descriptionSpan">GitHub:    </span>
            <a href={projects.github} target="_blank" rel="noopener noreferrer" id="blacklinktag">{projects.github}</a>
          </div>
        </div>
      </div>
    </Modal>
  )
}

function Applications() {
  const [projects, setProjects] = useState([{
    openModal: false,
    projects: [
      {
        name: "Cotripper",
        description: "Built an open-source full-stack application to facilitate an organized group travel experience for single mothers. My contributions included developing Banner and Modal component libraries and collaborating with a team of five engineers to build out the 'Book a trip' page.  Over 25 engineers collaborated on this project using agile (kanban) methodologies, morning and afternoon standing-ups, and GitHub workflow.",
        technologies: "CSS, Django, Enzyme, Jest, Node.JS,  PostgreSQL, Python, React.JS, Storybook, SQL",
        github: "https://github.com/CotripperPlatform/CoTrip",
        Stack: "Django (Back-end), Reacto (Front-end), SQL (Storage)",
        backgroundImage: require("./images/cotippeer.png"),
        openModal: false
      },
      {
        name: "theNotesCli",
        description: "Developed a command-line application that has the ability to create, update and delete notes based on the user's request.",
        technologies: "Peewee ORM, PostgreSQL, Psycopg2, Python",
        github: "https://github.com/cenwachukwu/pythonCLIProject",
        Stack: "Python",
        backgroundImage: require("./images/meddirectoryapi.gif"),
        openModal: false
      },
      {
        name: "A Component Library ",
        description: "Developed a library of different styles of buttons, forms, inputs, and image cards which saves users the time of building basic components from scratch.",
        technologies: "Adobe XD, CSS,  NPM, React, Storybook",
        github: "https://github.com/cenwachukwu/A-Component-Library",
        Stack: "React",
        backgroundImage: require("./images/storybook.png"),
        openModal: false
      },
    ]
  }]);

  return (
    <div>
      <Navbar />
      <div className="projectsParentsContainer">
        {projects[0].showModal ? <div className="back-drop-close-modal"></div> : null}
        <div className="projectsParents">
          {projects[0].projects.map((project, index) => (
            <Project
              key={index}
              index={index}
              projects={project}
              openModal={projects[0].openModal}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Applications;
