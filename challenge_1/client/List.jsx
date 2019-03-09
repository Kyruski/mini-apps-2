import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = function({ items }) {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th style={{ width: "100px", textAlign: "middle" }}>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.length ? (
            items.map((item, index) => (
              <ListItem key={`listitem${index}`} item={item} />
            ))
          ) : (
            <tr>
              <td colSpan="2">No items matching search</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
