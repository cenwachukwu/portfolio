import React from 'react';
import '../App.css';
import './About.css';
import Header from "../images/headerpic.JPG";

function About() {
    return (
        <div className="aboutDivParent" id="About">
            <div className="aboutDivContainer">
                <div className="aboutCatchPhrase">
                    <h3 className="aboutCatchPhraseHTag">The gap between Biology and Technology</h3>
                </div>
                <div className="aboutIconsContainerParent">
                    <div className="aboutIconsContainer">
                        <i class="fas fa-microscope aboutIcons"></i>
                        <i class="fas fa-plus aboutIcons1"></i>
                        <i class="fas fa-desktop aboutIcons"></i>
                    </div>
                </div>
                <div className="brandStatementContainer">
                    <p className="brandStatementContainerPtag">
                        As a software engineer with a background in scientific research, I am well-versed in problem-solving. While the scientific method helps me discover empirical truths and patterns, programming gives wings to my creative mind. Together, these skills help me communicate and implement clear and concise technical solutions.
                    </p>
                </div>

                <div className="aboutCatchPhrase2">
                    <h3 className="aboutCatchPhraseHTag">Chiebuka Elizabeth Nwachukwu</h3>
                </div>
                <div className="aboutIconsContainerParent">
                    <div className="aboutIconsContainer">
                        <img src={Header} className="CenwachukwuPics" width='700'/>
                    </div>
                </div>
                <div className="brandStatementContainer">
                    <p className="MeCatchWords">
                      Software Engineer | Creative | Budding World Traveler
                    </p>
                </div>

                <div className="aboutCatchPhrase2">
                    <h3>My Story</h3>
                </div>
                <div className="brandStatementContainer">
                <p className="backgroundAnchor">Since my background is a little unusual, I’m usually asked how I got involved with programming. Here’s how:</p>
                </div>
                <div className="StoryDivContainerParent">
                    <div className="StoryDivContainer">
                        <div className="StoryBox">
                            <div className="storyBoxNumber">
                                <p>1</p>
                            </div>
                            <div className="storyBoxIcon">
                                <i class="fas fa-plane-departure storyIcon"></i>
                            </div>
                            <div className="storyBoxTextBox">
                                <p className="storyBoxText">
                                    In 2013, I moved from Lagos, Nigeria to Washington, DC to pursue a bachelors degree in Biology.
                                </p>
                            </div>
                        </div>
                        <div className="StoryBox">
                            <div className="storyBoxNumber">
                                <p>2</p>
                            </div>
                            <div className="storyBoxIcon">
                                <i class="fas fa-user-graduate storyIcon"></i>
                            </div>
                            <div className="storyBoxTextBox">
                                <p className="storyBoxText">
                                    Then i graduated and realized... now what?
                                </p>
                            </div>

                        </div>
                        <div className="StoryBox">
                            <div className="storyBoxNumber">
                                <p>3</p>
                            </div>
                            <div className="storyBoxIcon">
                                <i class="fab fa-python storyIcon"></i>
                            </div>
                            <div className="storyBoxTextBox">
                                <p className="storyBoxText">
                                    Fastforward to 2018, I started working with a tech start-up and out of curiosity, I started teaching myself python.
                                </p>
                            </div>

                        </div>
                        <div className="StoryBox">
                            <div className="storyBoxNumber">
                                <p>4</p>
                            </div>
                            <div className="storyBoxIcon">
                                <i class="far fa-smile-beam storyIcon"></i>
                            </div>
                            <div className="storyBoxTextBox">
                                <p className="storyBoxText four">
                                My first python project – learning new information, the struggle of getting things to work, and how proud I was when it all came together - was all the push i needed to enroll in the Software Immersive Program at General Assembly DC.
                                </p>
                            </div>

                        </div>
                        <div className="StoryBox">
                            <div className="storyBoxNumber">
                                <p>5</p>
                            </div>
                            <div className="storyBoxIcon">
                            <i class="fas fa-server storyIcon"></i>
                            </div>
                            <div className="storyBoxTextBox">
                                <p className="storyBoxText">
                                    Armed with skills in front- and back-end technologies, frameworks, tools, and methods, I'm ready to takeover the world.
                                </p>
                            </div>
                        </div>
                        <div className="StoryBox">
                            <div className="storyBoxNumber">
                                <p>6</p>
                            </div>
                            <div className="storyBoxIcon">
                            <i class="far fa-user storyIcon"></i>
                            </div>
                            <div className="storyBoxTextBox">
                                <p className="storyBoxText">
                                What's next? <br/>I want to keep growing my programming skills while fulfiling my passion of creating user-friendly and aesthetically pleasing applications. <br/>Oh! I also want to visit Croatia!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
