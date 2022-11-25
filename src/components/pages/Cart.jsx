import React from "react";
import Cartelements from "./Cartelements";

function Cart(props) {
  return (
    <div className="container-fluid">
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
        </tr>
        <tbody>
          {" "}
          {props.products.map((p) => (
            <Cartelements
              id={p.id}
              name={p.name}
              price={p.price}
              countItems={p.count}
            />
          ))}
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-warning">Proceed To Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
