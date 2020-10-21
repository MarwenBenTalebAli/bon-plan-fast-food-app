import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";

const footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col>
            <ul className="copyright textColorWhite mt-4 pt-2">
              <li>
                Copyright <FontAwesomeIcon icon={faCopyright} /> 2020&nbsp;
                <a
                  href="https://www.msit-digital.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MSIT Digital
                </a>
                . Tous les droits sont réservés.
              </li>
            </ul>
          </Col>
          <div id="go-top">
            <Link
              title="Back to Top"
              href="#accueil"
              to="accueil"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </Link>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
