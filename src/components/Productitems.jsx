import React from "react";

function Productitems(props) {

  const handleAddToCart = () => {
    

  }
  return (
    <div className="card">
      <img
        src={props.image}
        className="card-img-top float-start"
        alt="Product Item Photo"
      />
      <div className="card-body">
        <p className="card-title">{props.description}</p>
        <p className="card-text">
          <strong>{props.price}$</strong>
        </p>
        <button className="btn btn-outline-dark" onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Productitems;
