import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Productcaegory from "./components/pages/Productcaegory";
import Cart from "./components/pages/Cart";
import Homedesign from "./components/pages/Homedesign";

//styles

function App() {
  const Products = [
    { id: 1, name: "Blue Sofa Chair", price: 50 },
    { id: 2, name: "Wooden Clock ", price: 20 },
    { id: 3, name: "Table", price: 80 },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-category/*" element={<Productcaegory />} />
        <Route path="/cart" element={<Cart products={Products} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
