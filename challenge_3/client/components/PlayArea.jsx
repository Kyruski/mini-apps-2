import React, { useState } from "react";
import KeyPad from "./KeyPad";

const PlayArea = function(props) {
  let [players, setPlayers] = useState(0);
  let [scorecard, setScoreCard] = useState(0);

  const onKeyPadPress = selection => {
    console.log("we got ", selection);
  };

  return (
    <div>
      <div>Dis be ScoreCard</div>
      <KeyPad onKeyPadPress={onKeyPadPress} />
    </div>
  );
};

export default PlayArea;
