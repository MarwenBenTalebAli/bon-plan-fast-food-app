import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Avantages.css";

const avantages = () => {
  return (
    <div id="avantages">
      <Jumbotron fluid className="block1 block_1 mb-0">
        <Container className="h-100">
          <div className="row justify-content-center h-100">
            <div className="col-12 align-items-center m-auto">
              <h1 className="avantages-titre">
                Burger <span className="orangeColor">coloré </span>
                au choix <br /> have it your way
              </h1>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default avantages;
