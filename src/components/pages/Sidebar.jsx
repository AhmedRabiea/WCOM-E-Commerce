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
      <Link to="content">Office</Link>
      <Link to="#">Sofa Furniture</Link>
      <Link to="#">Electronics</Link>
      <Link to="#">Smart Home</Link>
    </div>
  );
}

export default Sidebar;
