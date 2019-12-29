import React, { useState } from "react";
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button, } from "@material-ui/core";
import ProjectData from "./ProjectData"

function Modal(props) {
  return (
    <div className="modal-wrapper" style={{
      transform: props.openModal ? 'translateY(0vh)' : 'translateY(-100vh)',
      opacity: props.openModal ? '1' : '0'
    }}>
      <div className="modal-header">
        <span className="close-modal-btn" onClick={props.handleCloseModal}>×</span>
      </div>
      {props.children}
    </div>
  )
}

function Project({ project, handleOpenModal, }) {
  const imageUrl = project.backgroundImage;
  return (
    <div>
      <Button onClick={() => handleOpenModal(project)}>I am a modal</Button>
      <div className="projectsBox">
        <div className="projectName">
          <div style={{ backgroundImage: `url(${imageUrl})` }} className="projectImage"></div>
          <p onClick={() => handleOpenModal(project)}>{project.name}</p>
        </div>
      </div>
    </div>
  )
}

function Applications() {
  const [projects, setProjects] = useState([{ openModal: false, }]);

  function handleOpenModalClick(project) {
    const newProject = [...projects, { project }];
    newProject[0].openModal = true;
    setProjects(newProject)
  }

  function handleCloseModal() {
    // console.log(projects)
    alert('The modal was closed.');
    let newProject = [...projects];
    newProject[0].openModal = false;
    newProject.splice(1, 1);
    // console.log(newProject)
    setProjects(newProject)
  }

  function renderProjects() {
    return ProjectData.map((project, index) => {
      return <Project
        key={index}
        index={index}
        project={project}
        openModal={projects[0].openModal}
        handleOpenModal={handleOpenModalClick}
        handleCloseModal={handleCloseModal} />
    });
  }

  function renderModal() {
    console.log(projects)
    const projectModal = projects[0]
    if (!projectModal.openModal) {
      return null;
    }
    const imageUrl = projects[1].project.backgroundImage;
    return (
      <div>
        <div className="modalBox">
          <div className="projectName">
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="projectImage"></div>
            <p className="projectnamewhite">{projects[1].project.name}</p>
          </div>
          <div className="projectDescriptionDiv">
            <div className="projectDescription">
              <span className="descriptionSpan">Technologies:    </span>
              <p className="projectDescriptionP">{projects[1].project.technologies}</p>
            </div>
            <div className="projectDescription">
              <span className="descriptionSpan">Description:</span>
              <p className="projectDescriptionP">{projects[1].project.description}</p>
            </div>
            <div className="projectDescription" id="stack">
              <a href={projects[1].project.github} target="_blank" rel="noopener noreferrer" id="blacklinktag"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      {projects[0].openModal ? <div onClick={handleCloseModal} className="back-drop-close-modal"></div> : null}
      <div className="projectsParentsContainer">
      {projects[0].openModal ? null : 
        <div className="projectsParents">
          {renderProjects()}
        </div>}
        {projects[0].openModal ? 
        <Modal openModal={projects[0].openModal} handleCloseModal={handleCloseModal}>
          {renderModal()}
        </Modal> : null}
      </div>
      <Footer />
    </div>
  );
}

export default Applications;
