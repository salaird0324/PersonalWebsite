import React from 'react';
import { Container, Row, Col } from "reactstrap";


function AboutMe() {
    return (
        <>
            <Container>
            <div className="aboutMeHeader">
                <h1>
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
                    <p>
                        My name is Spencer Laird and I am a graduate from the University of Missouri with a
                        Bachelor’s degree in Information Technology with minors in Computer Science and Business.  I
                        have worked in the professional field for 2+ years as a Cloud Services/DevOps Engineer
                        working on tasks ranging from development and testing to support.  I am currently looking for a
                        full-time position related to my field of study.
                    </p>
                </div>

            </Container>

        </>
    );
}

export default AboutMe;
