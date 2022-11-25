import React from "react";

function Cartelements(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.price}$</td>
      <td>{props.countItems}</td>
      <td>
        <button className="btn btn-warning m-1">+</button>
        <button className="btn btn-warning">-</button>
      </td>
    </tr>
  );
}

export default Cartelements;
