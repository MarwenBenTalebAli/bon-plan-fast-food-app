import React from "react";
import "./Avis.css";
import { Carousel, Container, Jumbotron } from "react-bootstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";

const avis = () => {
  return (
    <div id="avis">
      <Jumbotron fluid={true} className="mb-0">
        <div className="block2 block_2 zoom"></div>
        <Container className="text-center">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="avisTitre">avis de nos chers clients</h1>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pb-3 align-self-center">
              <Carousel indicators={false} className="cid-c2">
                <Carousel.Item>
                  <Carousel.Caption>
                    <div className="card border-0">
                      <div className="card-content">
                        <div className="card-body p-0">
                          <div className="profile">
                            <img src={user1} alt="user_1" />
                            <span className="user-name ml-2">Sabrina T</span>
                          </div>
                          <div className="card-subtitle">
                            <p>
                              <small className="text-muted">
                                Impeccable Très très bon Service irréprochable
                                et personnel très sympa
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <div className="card border-0">
                      <div className="card-content">
                        <div className="card-body p-0">
                          <div className="profile">
                            <img src={user2} alt="user_2" />
                            <span className="user-name ml-2">Philippe G</span>
                          </div>
                          <div className="card-subtitle">
                            <p>
                              <small className="text-muted">
                                Accueil agréable , prix pas trop chère
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <div className="card border-0">
                      <div className="card-content">
                        <div className="card-body p-0">
                          <div className="profile">
                            <img src={user3} alt="user_3" />
                            <span className="user-name ml-2">Sophie D</span>
                          </div>
                          <div className="card-subtitle">
                            <p>
                              <small className="text-muted">
                                Resto super, Produits frais
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default avis;
