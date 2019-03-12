import React from "react";
import KeyPadItem from "./KeyPadItem";

const KeyPadRow = function({ row, onKeyPadPress }) {
  return (
    <tr>
      {row.map(item => (
        <KeyPadItem
          item={item}
          onKeyPadPress={onKeyPadPress}
          key={`item${item}`}
        />
      ))}
    </tr>
  );
};

export default KeyPadRow;
