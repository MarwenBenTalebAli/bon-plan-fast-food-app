import React from "react";
import "./Specialites.css";
import image8 from "../../assets/images/grid-list/IMAGE_8.jpg";
import image9 from "../../assets/images/grid-list/IMAGE_9.jpg";
import image10 from "../../assets/images/grid-list/IMAGE_10.jpg";
import image11 from "../../assets/images/grid-list/IMAGE_11.jpg";

const specialites = () => {
  return (
    <div id="specialites">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="section-title mt-5 mb-5">Nos spécialité</h1>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-item-wrapper space__bottom--m40">
                  <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 mb-4 space__bottom--40">
                      <div className="single-project-wrapper single-project-wrapper--reduced-abs">
                        <div className="single-project-item p-0">
                          <img
                            src={image8}
                            className="img-fluid"
                            alt="IMAGE_8"
                          />
                          <span className="single-project-title">
                            Burger rose et steak végétarien
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 mb-4 space__bottom--40">
                      <div className="single-project-wrapper single-project-wrapper--reduced-abs">
                        <div className="single-project-item p-0">
                          <img
                            src={image9}
                            className="img-fluid"
                            alt="IMAGE_9"
                          />
                          <span className="single-project-title">
                            Burger noir de la mer
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 space__bottom--40">
                      <div className="single-project-wrapper single-project-wrapper--reduced-abs">
                        <div className="single-project-item p-0">
                          <img
                            src={image10}
                            className="img-fluid"
                            alt="IMAGE_10"
                          />
                          <span className="single-project-title">
                            Burger vert au basilic
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 space__top--m20">
                      <div className="single-project-wrapper single-project-wrapper--reduced-abs">
                        <div
                          className="single-project-item p-0"
                          href="#specialites"
                        >
                          <img
                            src={image11}
                            className="img-fluid"
                            alt="IMAGE_11"
                          />
                          <span className="single-project-title">
                            Burger "Terre" de couleur bleue dédiée à la nature
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 align-self-center">
                      <h2 className="specialitesDescription float-right">
                        LIVRAISON RAPIDE ET GRATUIT À PARTIR DE
                        <span className="specialitesPrix"> 20 EURO</span>
                      </h2>
                      <button
                        type="button"
                        name=""
                        id=""
                        className="btn btn-green float-right"
                      >
                        Passer une commande
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default specialites;
