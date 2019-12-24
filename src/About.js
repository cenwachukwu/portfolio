import React from 'react';
import './App.css';

function About() {
    return (
        <div className="aboutDivParent">
            <div className="aboutDivContainer">
                <div className="aboutCatchPhrase">
                    <h3 className="aboutCatchPhraseHTag">The gap between Biology and Technology</h3>
                </div>
                <div className="aboutIconsContainerParent">
                    <div className="aboutIconsContainer">
                        <i class="fas fa-microscope aboutIcons"></i>
                        <i class="fas fa-plus aboutIcons"></i>
                        <i class="fas fa-desktop aboutIcons"></i>
                    </div>
                </div>
                <div className="brandStatementContainer">
                    <p className="brandStatementContainerPtag">
                        As a software engineer with a background in scientific research, I am well-versed in problem-solving. While the scientific method helps me discover empirical truths and patterns, programming gives wings to my creative mind. Together, these skills help me communicate and implement clear and concise technical solutions.
                    </p>
                </div>
                <div className="aboutCatchPhrase2">
                    <h3>My Story</h3>
                </div>

            </div>
        </div>
    );
}

export default About;
