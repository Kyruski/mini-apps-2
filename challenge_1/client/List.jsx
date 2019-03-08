import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = function({ items }) {
  return (
    <div>
      Hi
      {items.map((item, index) => (
        <ListItem key={`listitem${index}`} item={item} />
      ))}
    </div>
  );
};

export default List;
