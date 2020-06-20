import React from 'react';
// import emailjs from "emailjs-com";
// import '../App.css';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer"
import { TextField, Button } from '@material-ui/core';
import { withStyles, } from '@material-ui/core/styles';
import MobileNav from '../../Components/MobileNav/MobileNav';

// const StyledButton = withStyles({
//     root: {
//         //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         background: "rgba(255, 0, 255, 0.15)",
//         color: "rgba(255, 0, 255, 0.35)",
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(Button);

// const StyledTextField = withStyles({
//     root: {
//         width: "100%",
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(TextField);


function Contact() {
    // const [values, setValues] = useState([{ 
    //     name: "",
    //     email: "",
    //     message: "",
    // }]);

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     let templateParams = {
    //       from_name: values.name,
    //       user_email: values.email,
    //       subject: values.subject,
    //       message: values.message
    //     };
    //     emailjs
    //       .send(
    //         "default_service",
    //         "template_XdNGFGqQ",
    //         templateParams,
    //         "user_GcMPen9uoIZiKeLg8TDPa"
    //       )
    //       .then(
    //         result => {
    //           console.log(result.text);
    //         },
    //         error => {
    //           console.log(error.text);
    //         }
    //       );
    //     resetForm();
    // };
      
    // const resetForm = () => {
    //     setValues({ name: "", email: "", subject: "", message: "" });
    // };
      
    // const handleInputChange = e => {
    //     const { name, value } = e.target;
    //     setValues({ ...values, [name]: value });

    // };

    return (
        <div>
            <Navbar />
            <MobileNav/>
            <div className="contactConatinerParent">
                <div className="contactHeader">
                    <h3>Let us keep in touch</h3>
                </div>
                <div className="contactTextContainer">
                    <div className="contactTextContainerBox">
                        <p className="contactTextContainerBox--text prompt">Send me an email: </p>
                        <div className="contactTextContainerBox--links">
                            <a href="mailto:cenwachukwuu@gmail.com" className="a contactTextContainerBox--text"><i className="far fa-envelope i"></i></a>
                            <a href="mailto:cenwachukwuu@gmail.com" className="contactTextContainerBox--text a"><span className="contactEmail"> cenwachukwuu@gmail.com</span></a>
                        </div>
                    </div>
                    <div className="contactTextContainerBox">
                        <p className="contactTextContainerBox--text prompt">Follow me on LinkedIn: </p>
                        <div className="contactTextContainerBox--links">
                            <a href="https://www.linkedin.com/in/cenwachukwu" target="_blank" rel="noopener noreferrer" className="a"><i className="fab fa-linkedin-in i"></i></a>
                            <a href="https://www.linkedin.com/in/cenwachukwu" target="_blank" rel="noopener noreferrer" className="a contactTextContainerBox--text"><span className="contactEmail"> Chiebuka Nwachukwu</span></a>
                        </div>
                    </div>
                    <div className="contactTextContainerBox">
                        <p className="contactTextContainerBox--text prompt">Phone me: </p>
                        <div className="contactTextContainerBox--links">
                            <a href="tel:443-523-7863" className="a"><i className="fas fa-phone-alt i"></i></a>  
                            <a href="tel:443-523-7863" className="a contactTextContainerBox--text"><span className="contactEmail"> 443-523-7863  </span></a>                        
                        </div>
                    </div>
                </div>
                {/* <div className="contactContainerdiv">
                    <form onSubmit={handleSubmit}>

                        <div className="inputContainer">

                            <StyledTextField
                                id="filled-secondary"
                                label="Subject"
                                placeholder="Subject"
                                variant="outlined"
                                color="secondary"
                                onInput={handleInputChange}
                            />

                        </div>

                        <div className="inputContainer">
                            <StyledTextField
                                id="filled-secondary"
                                label="Name"
                                placeholder="Name"
                                variant="outlined"
                                color="secondary"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="inputContainer">
                            <StyledTextField
                                id="filled-secondary"
                                label="Email"
                                placeholder="Email"
                                variant="outlined"
                                color="secondary"
                                onInput={handleInputChange}
                            />
                        </div>

                        {/* <div className="inputContainer">
                            <StyledTextField
                                id="filled-secondary"
                                label="Phone"
                                placeholder="Phone"
                                variant="outlined"
                                color="secondary"
                                onChange={handleInputChange}
                            />
                        </div> */}

                        {/* <div className="inputContainer">
                            <StyledTextField
                                id="filled-secondary"
                                label="Message"
                                placeholder="Message"
                                variant="outlined"
                                color="secondary"
                                onInput={handleInputChange}
                            />
                        </div>
                        
                        <StyledButton variant="outlined" color="secondary" size="large">Send</StyledButton> */}

                    {/* </form>
                </div>  */}
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
