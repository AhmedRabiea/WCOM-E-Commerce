import React from "react";
import Productitems from "./Productitems";

// styles
import "./css/Products.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import Footer from "./Footer";

// imgs
import Fiberglass from "./imgs/fiberglass.jfif";
import Bluechair from "./imgs/bluechair.jfif";
import Bumperchair from "./imgs/bumperchair.png";
import Table from "./imgs/table.jfif";
import Wallclock from "./imgs/wallclock.jfif";
import Sleeper from "./imgs/sleepersofa.png";
import Beanbag from "./imgs/beanbag.jfif";
import Woodenbowls from "./imgs/woodenbowls.jfif";

function Products() {
  const Listitems = [
    { id: 1, img: Fiberglass, desc: "Fiber Glass Chair", price: 20 },
    { id: 2, img: Bluechair, desc: "Blue Chair", price: 20 },
    { id: 3, img: Bumperchair, desc: "Bumper Chair", price: 20 },
    { id: 4, img: Table, desc: "Wooden Table", price: 20 },
    { id: 5, img: Wallclock, desc: "Wooden Wall Clock", price: 20 },
    { id: 6, img: Sleeper, desc: "Sleeper Sofa", price: 20 },
    { id: 7, img: Beanbag, desc: "Bean Bag", price: 20 },
    { id: 8, img: Woodenbowls, desc: "Wooden Bowls", price: 20 },
  ];
  return (
    <div className="featured-products">
      <h2>Featured Products</h2>

      <div className="Product-Items container-fluid">
        {Listitems.map((product) => (
          <Productitems
            products={Listitems}
            image={product.img}
            description={product.desc}
            price={product.price}
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
