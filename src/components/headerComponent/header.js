
import React from "react";
import { useState } from 'react';
// nodejs library that concatenates strings
import classnames from "classnames";
import Products from "../Pages/products";
// reactstrap components
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Popover,
    PopoverHeader,
    PopoverBody
} from "reactstrap";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const logo = require('./images/logo.jpg');

function Header() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </Popover.Content>
        </Popover>
    );

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        href="/"
                        target="_blank"
                        title="Spencer Laird resume"
                    >
                        Technical Blog
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                href="https://github.com/salaird0324"
                                target="_blank"
                            >
                                <i className="nc-icon nc-planet" /> Github
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://linkedin.com/in/spencer-laird-72a040150/"
                                target="_blank"
                            >
                                <i className="nc-icon nc-book-bookmark" /> LinkedIn
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
