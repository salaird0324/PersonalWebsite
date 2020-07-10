import React, {useState} from 'react';
import {Container, Popover, PopoverBody, PopoverHeader} from "reactstrap";
import pdf from "./img/Resume 2020-1.pdf";

function HomePage() {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <>

            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(" + require('./img/office.jpg')+ ")"
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">Spencer Laird</h1>

                        </div>
                        <h2 className="presentation-subtitle text-center">
                            Software Developer and Engineer
                        </h2>
                    </Container>
                </div>
            </div>
            <Container>
                <div>
                    <h1 className="aboutMeHeader">
                        About Me
                    </h1>
                </div>
                <div className="img-style">
                    <div className="author">
                        <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("./img/profilePic.jpg")}
                        />
                    </div>
                </div>
                <div className="aboutMeParagraph">
                    <p className="paragraph">
                        My name is Spencer Laird and I am a graduate from the University of Missouri with a
                        Bachelor’s degree in Information Technology and minors in Computer Science and Business.  I
                        have worked in the professional field for 2+ years as a Cloud Services/DevOps Engineer
                        working on tasks ranging from development and testing to support on cloud-based applications.
                    </p>
                    <div id="secondParagraph">
                    <p className="paragraph">I am currently trying to learn more about building single page applications using frameworks such as Angular and React.
                        If you want to learn more about my experience you can take a look at my resume down below!</p>
                    </div>
                    <a href={pdf} download="SpencerLairdResume.pdf" className="resumeDownload">Download Resume</a>
                    {/*<button className="nc-icon nc-bulb-63" id="Popover1" type="button"> Contact</button>*/}
                    {/*<Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>*/}
                    {/*    <PopoverHeader>Contact Info.</PopoverHeader>*/}
                    {/*    <PopoverBody><ul><li>816-352-3017</li></ul></PopoverBody>*/}
                    
                    {/*</Popover>*/}
                </div>


            </Container>
        </>
    );
}

export default HomePage;
