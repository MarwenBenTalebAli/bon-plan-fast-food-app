import React from "react";
import "./Plats.css";
// import Card from "./Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

import image4 from "../../assets/images/menu/IMAGE_4.jpg";
import image5 from "../../assets/images/menu/IMAGE_5.jpg";
import image6 from "../../assets/images/menu/IMAGE_6.jpg";
import image7 from "../../assets/images/menu/IMAGE_7.jpg";

const plats = () => {
  return (
    <div id="plats">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="section-title mb-5 mt-5">Menu</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 pb-3 align-self-center align-self-sm-center">
            <div className="card card-block m-auto">
              <div className="image-container">
                <h4 className="card-title top-right">
                  <span className="badge badge-success p-2">COMMANDEZ</span>
                </h4>
                <img
                  className="card-img-top"
                  src={image4}
                  alt="SANDWICH_IMAGE"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title mt-3 mb-3">
                  Sandwich ÉDITION LIMITÉ
                </h5>
                <p className="cardDescription">
                  steak haché, fromage, tomattes, laitues
                </p>
              </div>

              <div className="card-footer">
                <div className="align-self-end float-right">
                  <em className="cardPrix mb-1">8,9</em>
                  <span className="cardPrixIcone pl-2">
                    <FontAwesomeIcon icon={faEuroSign} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 pb-3 align-self-center align-self-sm-center">
            <div className="card card-block m-auto">
              <img className="card-img-top" src={image5} alt="NUGGETS_IMAGE" />
              <div className="card-body">
                <h5 className="card-title mt-3 mb-3">NUGGETS</h5>
                <p className="cardDescription">poulet, croquette</p>
              </div>
              <div className="card-footer">
                <div className="align-self-end float-right">
                  <em className="cardPrix mb-1">12,6</em>
                  <span className="cardPrixIcone pl-2">
                    <FontAwesomeIcon icon={faEuroSign} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 pb-3 align-self-center align-self-sm-center">
            <div className="card card-block m-auto">
              {/* <h4 className="card-title text-right">
                <i className="material-icons">settings</i>
              </h4> */}
              <img className="card-img-top" src={image6} alt="PLATS_IMAGE" />
              <div className="card-body">
                <h5 className="card-title mt-3 mb-3">PLATS</h5>
                <p className="cardDescription">salades</p>
              </div>
              <div className="card-footer">
                <div className="align-self-end float-right">
                  <em className="cardPrix mb-1">16,8</em>
                  <span className="cardPrixIcone pl-2">
                    <FontAwesomeIcon icon={faEuroSign} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 pb-3 align-self-center align-self-sm-center">
            <div className="card card-block m-auto">
              <img className="card-img-top" src={image7} alt="BOISSONS_IMAGE" />
              <div className="card-body">
                <h5 className="card-title mt-3 mb-3">BOISSONS</h5>
                <p className="cardDescription pr-5">
                  eau minerale, soda, jus, café, thé...
                </p>
              </div>
              <div className="card-footer">
                <div className="align-self-end float-right">
                  <em className="cardPrix mb-1">6</em>
                  <span className="cardPrixIcone pl-2">
                    <FontAwesomeIcon icon={faEuroSign} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default plats;
