import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Productcaegory from "./components/pages/Productcaegory";
import Cart from "./components/pages/Cart";

// imgs
import Fiberglass from "./components/imgs/fiberglass.jfif";
import Bluechair from "./components/imgs/bluechair.jfif";
import Bumperchair from "./components/imgs/bumperchair.png";
import Table from "./components/imgs/table.jfif";
import Wallclock from "./components/imgs/wallclock.jfif";
import Sleeper from "./components/imgs/sleepersofa.png";
import Beanbag from "./components/imgs/beanbag.jfif";
import Woodenbowls from "./components/imgs/woodenbowls.jfif";

function App() {
  const [Products, setProducts] = useState([
    { id: 1, img: Fiberglass, desc: "Fiber Glass Chair", count: 1, price: 20 },
    { id: 2, img: Bluechair, desc: "Blue Chair", count: 1, price: 20 },
    { id: 3, img: Bumperchair, desc: "Bumper Chair", count: 1, price: 20 },
    { id: 4, img: Table, desc: "Wooden Table", count: 1, price: 20 },
    { id: 5, img: Wallclock, desc: "Wooden Wall Clock", count: 1, price: 20 },
    { id: 6, img: Sleeper, desc: "Sleeper Sofa", count: 1, price: 20 },
    { id: 7, img: Beanbag, desc: "Bean Bag", count: 1, price: 20 },
    { id: 8, img: Woodenbowls, desc: "Wooden Bowls", count: 1, price: 20 },
  ]);

  const [emptyArray, setEmptyArray] = useState([]);

  const addToCart = (product) => {
    const isExist = emptyArray.filter((x) => x.id === product.id).length > 0;

    {
      isExist ? (product.count += 1) : setEmptyArray([...emptyArray, product]);
    }
  };

  const handleIncrement = () => {
    [...emptyArray];
  };
  return (
    <React.Fragment>
      <Navbar itemsCount={emptyArray.length} />
      <Routes>
        <Route
          path="/"
          element={<Home products={Products} addToCart={addToCart} />}
        />
        <Route path="/product-category/*" element={<Productcaegory />} />
        <Route path="/cart" element={<Cart products={emptyArray} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
