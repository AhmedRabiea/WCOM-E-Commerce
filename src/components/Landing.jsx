import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

//imgs
import landingImg from "./imgs/content.jfif";

// styles
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/Carousel.css";

function Carousel() {
  return (
    <div className="demo">
      <img
        src={landingImg}
        alt="sofa-design-furniture"
        className="img-fluid d-block"
      />
      <div className="content">
        <div className="text">
          <h1>it has finally started</h1>
          <p>
            season sale <br />
            2022!
          </p>
          <a href="/product-category">
            <button className="btn btn-dark">Shop Now</button>
          </a>
        </div>
      </div>
      <div className="scroll-down">
        <FontAwesomeIcon icon={faCircleArrowDown} />
      </div>
    </div>
  );
}

export default Carousel;
