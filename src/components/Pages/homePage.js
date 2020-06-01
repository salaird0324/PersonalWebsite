import React from 'react';
import { Container } from "reactstrap";


function HomePage() {
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
                        working on tasks ranging from development and testing to support.
                    </p>
                </div>

            </Container>
        </>
    );
}

export default HomePage;
