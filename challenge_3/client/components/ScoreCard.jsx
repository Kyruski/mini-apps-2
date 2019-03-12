import React from "react";

const ScoreCard = function({ scores }) {
  const headers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let total = scores.reduce((total, item) => {
    return item ? total + Number(item) : total;
  }, 0);
  let subtotal = [];
  for (let i = 0; i < scores.length; i++) {
    let sum;
    if (i % 2 === 1) {
      if (scores[i] === null) {
        sum = null;
      } else {
        sum = Number(scores[i]) + Number(scores[i - 1]);
        if (i / 2 > 1) {
          sum = sum + subtotal[subtotal.length - 1];
        }
      }
      subtotal.push(sum);
    }
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th colSpan="2" key={`header${index}`}>
                {header}
              </th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {scores.map((score, index) => (
              <td
                key={`score-${index}`}
                style={{
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                  verticalAlign: "center"
                }}
              >
                {score === 30 ? "X" : score === 10 ? "/" : score}
              </td>
            ))}
            <td
              style={{
                width: "50px",
                height: "50px",
                textAlign: "center",
                verticalAlign: "center"
              }}
            >
              {total}
            </td>
          </tr>
          <tr>
            {subtotal.map((score, index) => (
              <td
                key={`subtotal-${index}`}
                colSpan="2"
                style={{
                  height: "50px",
                  textAlign: "center",
                  verticalAlign: "center"
                }}
              >
                {score}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreCard;
