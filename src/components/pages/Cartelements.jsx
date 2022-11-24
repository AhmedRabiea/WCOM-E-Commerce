import React from "react";

function Cartelements(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.price}$</td>
    </tr>
  );
}

export default Cartelements;
