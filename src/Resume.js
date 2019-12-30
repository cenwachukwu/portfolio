import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Resume() {
  return (
    <div>
      <Navbar />
      <div className="resumeParent">
        <div className="resumeContainer">
          <h2 className="ppp">Resume</h2>
          <div className="resumeContent">
            <div className="resumeLeft">
              <div className="resumeLanguages">
                <div>
                  <h2 className="content-align-left">Languages</h2>
                </div>
                <div>
                  <ul className="resumeListParent">
                  <li className="resumeList caps"><i class="fab fa-html5 blackIconn"></i>html</li>
                  <li className="resumeList caps"><i class="fab fa-css3 blackIconn"></i>css</li>
                    <li className="resumeList"><i class="fas fa-code blackIconn"></i>Javscript</li>
                    <li className="resumeList"><i class="fab fa-python blackIconn"></i>Python</li>
                    <li className="resumeList"><i className="fa fa-code blackIconn"></i>Node.JS</li>
                  </ul>
                </div>
              </div>
              <div className="resumeLanguages libraries">
                <div>
                  <h2 className="content-align-left">Database</h2>
                </div>
                <div>
                  <ul className="resumeListParent">
                    <li className="resumeList"><i class="fa fa-database blackIconn"></i>Mongo DB</li>
                    <li className="resumeList"><i class="fa fa-cube blackIconn"></i>PostgreSQL</li>
                    <li className="resumeList"><i class="fa fa-cubes blackIconn"></i>MySQL</li>
                  </ul>
                </div>
              </div>

              <div className="resumeLanguages libraries">
                <div>
                  <h2 className="content-align-left">Libraries/Framework</h2>
                </div>
                <div>
                  <ul className="resumeListParent">
                    <li className="resumeList"><i class="fas fa-code blackIconn"></i>Django</li>
                    <li className="resumeList"><i class="fa fa-object-ungroup blackIconn"></i>React JS</li>
                    <li className="resumeList"><i class="fa fa-server blackIconn"></i>Express JS</li>
                    <li className="resumeList"><i class="fa fa-plus-square blackIconn"></i>Bootstrap</li>
                    <li className="resumeList"><i class="fa fa-adjust blackIconn"></i>Material-UI</li>
                    <li className="resumeList caps"><i class="fa fa-folder-o blackIconn"></i>Npm</li>
                  </ul>
                </div>
              </div>

              <div className="resumeLanguages libraries">
                <div>
                  <h2 className="content-align-left">Methodologies</h2>
                </div>
                <div>
                  <ul className="resumeListParent">
                    <li className="resumeList caps"><i class="fas fa-laptop-code blackIconn"></i>Rest</li>
                    <li className="resumeList caps"><i class="fa fa-search blackIconn"></i>Mvc</li>
                    <li className="resumeList caps"><i class="fa fa-cogs blackIconn"></i>Oop</li>
                    <li className="resumeList"><i class="fa fa-calendar-o blackIconn"></i>Agile</li>
                  </ul>
                </div>
              </div>

              <div className="resumeLanguages libraries">
                <div>
                  <h2 className="content-align-left">User Experience</h2>
                </div>
                <div>
                  <ul className="resumeListParent">
                    <li className="resumeList"><i class="fa fa-desktop blackIconn"></i>Responsive Web Design</li>
                    <li className="resumeList"><i class="fa fa-bug blackIconn"></i>Bug & Issue Tracking</li>
                    <li className="resumeList"><i class="fa fa-sitemap blackIconn"></i>Wireframing</li>
                  </ul>
                </div>
              </div>
              <div className="resumeLanguages libraries">
                <div>
                  <h2 className="content-align-left">Additional</h2>
                </div>
                <div>
                  <ul className="resumeListParent">
                    <li className="resumeList"><i class="fab fa-git blackIconn"></i>Git</li>
                    <li className="resumeList"><i class="fab fa-github blackIconn"></i>Github</li>
                    <li className="resumeList"><i class="fa fa-paper-plane blackIconn"></i>Heroku</li>
                    <li className="resumeList"><i class="fas fa-satellite blackIconn"></i>Netlify</li>
                    <li className="resumeList"><i class="fas fa-truck-monster blackIconn"></i>Postman</li>
                    <li className="resumeList"><i class="fab fa-adobe blackIconn"></i>Adobe XD</li>
                    <li className="resumeList"><i class="fas fa-asterisk blackIconn"></i>VS Code</li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="resumeRight">
              <div className="resumeTitle">
                <h2 className="content-align-left topic">Experience</h2>
              </div>
              <div className="experienceTITLE">
                <h3 className="content-align-left">GENERAL ASSEMBLY DC</h3>
                <h5 className="content-align-left subTopic">SOFTWARE ENGINEERING IMMERSIVE , Student  |  Sept. 2019​ - Current</h5>
              </div>
              <div className="ResumeExperienceBox">
                <ul className="resumeExperienceUl">
                  <li className="resumeExperience">
                    Collaborate with a team of over 25 software engineers and UI/UX designers to design, create, test, and document client projects in an agile environment.
                  </li>
                  <li className="resumeExperience">
                    Develop and design functional and efficient user interfaces with HTML, CSS, Javascript, and React.JS.
                  </li>
                  <li className="resumeExperience">
                    Develop back-end language and framework proficiency with Python, Node.js, Express.js, and Django.
                  </li>
                  <li className="resumeExperience">
                    Utilize multiple database technologies including NoSQL with MongoDB and Mongoose ORM, Postgres relational SQL with Django.
                  </li>
                  <li className="resumeExperience">
                    Utilize a hands-on approach to develop real-world applications while maintaining two GitHub (GitHub & GH Enterprise) profiles with a combined commit history of 400+ contributions.
                  </li>
                </ul>
              </div>
              <div className="experienceTITLE">
                <h3 className="content-align-left">FiscalNote, Washington, DC</h3>
                <h5 className="content-align-left subTopic">Front Desk Assistant |  Nov. 2018​ - Aug. 2019​</h5>
              </div>
              <div className="ResumeExperienceBox">
                <ul className="resumeExperienceUl">
                  <li className="resumeExperience">
                    Enhanced the company’s integrity and security by designing and implementing the use of an identification badge system.
                  </li>
                  <li className="resumeExperience">
                    Provided excellent customer service by creating a client-facing area conducive enough for employees to perform at their optimum best and relaxing enough for the client's comfort.
                  </li>
                  <li className="resumeExperience">
                    Managed the first line of communication between the company and prospective clients while maintaining a sense of urgency and excellent organizational skills.
                  </li>
                </ul>
              </div>
              <div className="experienceTITLE">
                <h3 className="content-align-left">University of Maryland Eastern Shore , Princess Anne</h3>
                <h5 className="content-align-left subTopic">Undergraduate Research Assistant |  Jan. 2015​ - July 2017​​</h5>
              </div>
              <div className="ResumeExperienceBox">
                <ul className="resumeExperienceUl">
                  <li className="resumeExperience">
                    Mentored middle school students from three Maryland counties by training them on the collection of water quality data and microscopic identification of planktonic species.                    </li>
                  <li className="resumeExperience">
                    Collaborated with a multi-disciplinary research team focusing on the effects of citrus fruits as oviposition attractants or repellents against Anopheles gambiae mosquitoes.                  </li>
                  <li className="resumeExperience">
                    Documented and presented research findings at science symposiums and assisted with outreach activities in low- to mid-income communities.
                  </li>
                </ul>
              </div>
              <div className="resumeTitle-top">
                <h2 className="content-align-left topic">Projects</h2>
              </div>
              <div className="ResumeExperienceBox pro">
                <p className="resumeProjects">
                  <a href="https://github.com/CotripperPlatform/CoTrip" target="_blank" rel="noopener noreferrer" className="resumeAtag">CoTripper:</a>
                  Built an open-source full-stack application to facilitate an organized group travel experience for single mothers. My contributions included developing Banner and Modal component libraries and collaborating with a team of five engineers to build out the 'Book a trip' page.  Over 25 engineers collaborated on this project using agile (kanban) methodologies, morning and afternoon standing-ups, and GitHub workflow.
                  </p>
                <p className="resumeProjects">
                  <a href="https://github.com/cenwachukwu/pythonCLIProject" target="_blank" rel="noopener noreferrer" className="resumeAtag">theNotesCli:</a>
                  Developed a command-line application that has the ability to create, update and delete notes based on the user's request.                  </p>
                <p className="resumeProjects">
                  <a href="https://med-directory-cen.herokuapp.com/directory" target="_blank" rel="noopener noreferrer" className="resumeAtag">The CEN Company:</a>
                  Developed a medical directory API that provides its users with the information of medical practitioners.                  </p>
                <p className="resumeProjects">
                  <a href="https://gifted-hamilton-0abe26.netlify.com" target="_blank" rel="noopener noreferrer" className="resumeAtag">A Component Library:</a>
                  Developed a library of different styles of buttons, forms, inputs, and image cards which saves users the time of building basic components from scratch.                  </p>
              </div>
              <div>
                <h2 className="content-align-left Projects topic">Education & Training</h2>
              </div>
              <div className="ResumeExperienceBox pro">
                <div className="educationResume">
                  <h3 className="content-align-left">General Assembly, Washington, DC</h3>
                  <p className="content-align-left subEducation">Software Engineering immersive | Sept. 2019​ - Dec. 2019​</p>
                </div>
                <div>
                  <h3 className="content-align-left">University of Maryland Eastern Shore, Princess Anne, MD</h3>
                  <p className="content-align-left subEducation">Bachelor of Science, Biology | Jan. 2014​ - May 2017​​</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
