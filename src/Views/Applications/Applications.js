import React, { useState } from "react";
// import '../App.css';
import './Applications.css';
// import Navbar from '../Components/Navbar/Navbar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ProjectData from "./ProjectData";
import MobileNav from "../../Components/MobileNav/MobileNav";

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
      <div className="projectsBox" onClick={() => handleOpenModal(project)}>
        <div className="projectName">
          <div style={{ backgroundImage: `url(${imageUrl})` }} className="projectImage" ></div>
          <p >{project.name}</p>
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
    let newProject = [...projects];
    newProject[0].openModal = false;
    newProject.splice(1, 1);
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
    const projectModal = projects[0]
    if (!projectModal.openModal) {
      return null;
    }
    const imageUrl = projects[1].project.backgroundImage;
    return (
      <div>
        <div className="modalBox">
          <div className="projectName">
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="projectImage imageModal"></div>
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
              <a href={projects[1].project.github} target="_blank" rel="noopener noreferrer" className="apadding"><i className="fab fa-github apadding"></i></a>
              {projects[1].project.deployed ?
                <a href={projects[1].project.deployed} target="_blank" rel="noopener noreferrer" className="apadding"><i className="fas fa-link apadding"></i></a>
                : null}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <MobileNav/>
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
