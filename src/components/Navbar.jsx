import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// styles
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/Navbar.css";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand me-5" to="/">
          <span>W</span>COM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-category">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/product-category"
              >
                Product Category
              </Link>
            </li>
          </ul>
          <form className="d-flex me-auto mb-2 mb-lg-0" role="search">
            <input
              id="nav-input"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                <FontAwesomeIcon icon={faUser} />
                Hi,Ahmed
              </Link>
            </li>
            <li className="nav-item" id="nav-cart ">
              <Link className="nav-link position-relative" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
                <span className="position-absolute top-1 start-100 translate-middle badge rounded-circle bg-warning">
                  {props.itemsCount}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
