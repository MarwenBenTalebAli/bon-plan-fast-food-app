import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/icons/logo-white.svg";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container fluid="xl">
          <Navbar.Brand>
            <Link
              href="#accueil"
              to="accueil"
              className="navbar-brand"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img
                alt="Logo"
                src={logo}
                width="120"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <li className="nav-item">
                <Link
                  href="#accueil"
                  to="accueil"
                  activeClass="active"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#presentation"
                  to="presentation"
                  activeClass="active"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Présentation
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#plats"
                  to="plats"
                  activeClass="active"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Plats
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#avantages"
                  to="avantages"
                  activeClass="active"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Avantages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#contact"
                  to="contact"
                  activeClass="active"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </Nav>
            <Nav className="mr-auto social-links text-center">
              <Nav.Link
                href="https://www.linkedin.com/in/"
                target="_blank"
                className="socialIcone"
              >
                <FontAwesomeIcon icon={faPhoneAlt} />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/"
                target="_blank"
                className="socialIcone"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com/"
                target="_blank"
                className="socialIcone"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default navbar;
