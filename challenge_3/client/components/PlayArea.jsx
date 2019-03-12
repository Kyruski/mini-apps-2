import React, { useState, useEffect } from "react";
import ScoreCard from "./ScoreCard";
import KeyPad from "./KeyPad";

const PlayArea = function(props) {
  let [players, setPlayers] = useState(0);
  let [scoreCard, setScoreCard] = useState(0);
  let [currIndex, setCurrIndex] = useState(0);
  let [message, setMessage] = useState(
    "Click the key that corresponds to the number of pins knocked down last bowl. If your second bowl was a spare, hit 'Spare'."
  );
  let [scores, setScores] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);

  const insertIntoScore = (number, num2) => {
    if (currIndex >= 20) {
      setMessage("Error: Game is over");
      return;
    }
    let isNum2 = num2 !== undefined;
    let index = isNum2 && currIndex ? currIndex + 1 : currIndex;
    let insert = isNum2 ? [num2, number] : [number];
    let slice1 = scores.slice(0, currIndex);
    let slice2 =
      (currIndex && isNum2) || !isNum2
        ? scores.slice(index + 1)
        : scores.slice(index + 2);
    let newScores = [...slice1, ...insert, ...slice2];
    setScores(newScores);
    setCurrIndex(isNum2 ? currIndex + 2 : currIndex + 1);
  };

  const onKeyPadPress = selection => {
    if (selection === "Strike") {
      currIndex % 2 === 0
        ? insertIntoScore(30, 0)
        : setMessage("Invalid Score: Cannot have a Strike as the Second Bowl");
    } else if (selection === "Spare") {
      currIndex % 2 === 1
        ? insertIntoScore(10)
        : setMessage("Invalid Score: Cannot have a Spare as the First Bowl");
    } else {
      currIndex % 2 === 1 &&
      Number(selection) + Number(scores[currIndex - 1]) > 9
        ? setMessage(
            "Invalid Score: Cannot have a score above 9 for the Second Bowl without a Spare"
          )
        : insertIntoScore(selection);
    }
  };

  useEffect(() => {
    setMessage("");
  }, [scores]);

  return (
    <div>
      <div>
        <ScoreCard scores={scores} />
      </div>
      <div>
        <br />
        <KeyPad onKeyPadPress={onKeyPadPress} />
        <div id="message"> {message} </div>
      </div>
    </div>
  );
};

export default PlayArea;
