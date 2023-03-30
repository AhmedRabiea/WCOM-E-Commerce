import React from "react";
import Productitems from "./Productitems";

// styles
import "./css/Products.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import Footer from "./Footer";

function Products(props) {
  return (
    <div className="featured-products">
      <h2>Featured Products</h2>

      <div className="Product-Items container-fluid">
        {props.items.map((product) => (
          <Productitems
            product={product}
            image={product.img}
            description={product.desc}
            price={product.price}
            addToCart={props.addToCart}
          />
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Products;
