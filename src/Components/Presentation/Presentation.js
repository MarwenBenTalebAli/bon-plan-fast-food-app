import React from "react";
import "./Presentation.css";
import image_presentation from "../../assets/images/image_presentation1.jpg";
import { Col, Container, Row } from "react-bootstrap";

const presentation = () => {
  return (
    <div id="presentation">
      <Container className="presentation">
        <Row className="justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
            <h1 className="section-title mt-5 mb-5">Présentation</h1>
          </Col>
          <Col xs={12} sm={12} md={(7, { order: 2 })} lg={7} xl={7}>
            <h1 className="presentation-heading">In burger we trust</h1>
            <h2 className="presentation-text-description">
              Régalez vous au coeur de paris, notre marque, fondée en 2020.
            </h2>
            <h2 className="presentation-text-description">
              Le berger est bien plus qu’un ingrédient : c’est une véritable
              passion !
            </h2>
            <h2 className="presentation-text-description">
              Commandez en ligne vos Menus préférés et faites vous livrer via
            </h2>
            <h2 className="presentation-text-lien">BON PLAN FAST FOOD.FR</h2>
          </Col>
          <Col
            className="align-items-end align-items-sm-end align-items-md-end align-items-lg-end align-items-xl-end"
            xs={12}
            sm={12}
            md={(5, { order: 1 })}
            lg={(5, { order: 1 })}
            xl={(5, { order: 1 })}
          >
            <img
              src={image_presentation}
              className="img-fluid img-responsive m-auto"
              alt="image_presentation"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default presentation;
