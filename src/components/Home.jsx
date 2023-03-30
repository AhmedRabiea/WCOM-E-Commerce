import React from "react";
import Landing from "./Landing";
import Products from "./Products";

function Home(props) {
  return (
    <div className="Home-Page">
      <Landing />
      <Products items={props.products} addToCart={props.addToCart} />
    </div>
  );
}

export default Home;
