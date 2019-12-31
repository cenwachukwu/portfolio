import React from 'react';
import '../App.css';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer"
import { TextField, Button } from '@material-ui/core';
import { withStyles, } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
        //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        background: "rgba(255, 0, 255, 0.15)",
        color: "rgba(255, 0, 255, 0.35)",
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const StyledTextField = withStyles({
    root: {
        width: "100%"
    },
    label: {
        textTransform: 'capitalize',
    },
})(TextField);

function Contact() {

    return (
        <div>
            <Navbar />
            <div className="contactConatinerParent">
                <div className="contactHeader">
                    <h3>Contact Me</h3>
                </div>
                <div className="contactTextContainer">
                    <p>
                        If you’d like to stop by to say “hi", just send me a message at <span className="contactEmail"> cenwachukwuu@gmail.com </span> or fill out the form below. I’ll get back to you as soon as possible.
                    </p>
                </div>
                <div className="contactContainerdiv">
                    <form>

                        <div className="inputContainer">

                            <StyledTextField
                                id="filled-secondary"
                                label="Subject"
                                placeholder="Subject"
                                variant="outlined"
                                color="secondary"
                            />

                        </div>

                        <div className="inputContainer">
                            <StyledTextField
                                id="filled-secondary"
                                label="Name"
                                placeholder="Name"
                                variant="outlined"
                                color="secondary"
                            />
                        </div>

                        <div className="inputContainer">
                            <StyledTextField
                                id="filled-secondary"
                                label="Email"
                                placeholder="Email"
                                variant="outlined"
                                color="secondary"
                            />
                        </div>

                        <div className="inputContainer">
                            <StyledTextField
                                id="filled-secondary"
                                label="Phone"
                                placeholder="Phone"
                                variant="outlined"
                                color="secondary"
                            />
                        </div>

                        <div className="inputContainer">
                            <StyledTextField
                                id="filled-secondary"
                                label="Message"
                                placeholder="Message"
                                variant="outlined"
                                color="secondary"
                            />
                        </div>
                        
                        <StyledButton variant="outlined" color="secondary" size="large">Send</StyledButton>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
