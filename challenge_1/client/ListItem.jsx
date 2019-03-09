import React from "react";

const ListItem = function({ item }) {
  return (
    <tr style={{ height: "50px" }}>
      <td>{item.date}</td>
      <td>{item.description}</td>
    </tr>
  );
};

export default ListItem;
