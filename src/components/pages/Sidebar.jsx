import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link className="active" to="/product-category">
        Home <FontAwesomeIcon icon={faHouse} />
      </Link>
      <Link to="office">Office</Link>
      <Link to="sofa-furniture">Sofa Furniture</Link>
      <Link to="electronics">Electronics</Link>
      <Link to="smart-home">Smart Home</Link>
    </div>
  );
}

export default Sidebar;
