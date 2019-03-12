import React from "react";

const KeyPadItem = function({ item, onKeyPadPress }) {
  const onClick = e => {
    onKeyPadPress(e.target.innerHTML);
  };

  return (
    <td
      className="keypad-btn"
      style={{
        width: "100px",
        height: "100px",
        textAlign: "center",
        verticalAlign: "center"
      }}
      onClick={e => onClick(e)}
    >
      {item}
    </td>
  );
};

export default KeyPadItem;
