import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import right_arrow from "../../assets/images/icons/right-arrow-triangle.svg";
import left_arrow from "../../assets/images/icons/left-arrow-triangle.svg";

const slider = () => {
  return (
    <Carousel
      nextIcon={
        <img src={right_arrow} className="arrow" alt="right_arrow" width="35" />
      }
      prevIcon={
        <img src={left_arrow} className="arrow" alt="left_arrow" width="35" />
      }
      className="cid-c1"
    >
      <Carousel.Item className="slider-fullscreen-image">
        <div className="container container-slide">
          <div className="image_wrapper">
            <div className="mbr-overlay"></div>
            <div className="carousel-caption justify-content-center">
              <div className="col-10 text-left">
                <h1 className="slogon-title display-2">
                  Ce n'est pas la fourchette qui fait le{" "}
                  <span className="text-orange">bon plat</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-fullscreen-image">
        <div className="container container-slide">
          <div className="image_wrapper">
            <div className="mbr-overlay"></div>
            <div className="carousel-caption justify-content-center">
              <div className="col-10 text-left">
                <h1 className="slogon-title display-2">
                  Bien plus que du sucre
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-fullscreen-image">
        <div className="container container-slide">
          <div className="image_wrapper">
            <div className="mbr-overlay"></div>
            <div className="carousel-caption justify-content-center">
              <div className="col-10 text-left">
                <h1 className="lead slogon-title display-2">
                  Bien manger, un plaisir à partager
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default slider;
