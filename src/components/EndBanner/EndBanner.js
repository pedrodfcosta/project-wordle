import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function EndBanner({ guessList, answer }) {
  if (guessList.length === 0) {
    return;
  }

  if (guessList[guessList.length - 1] === answer) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {guessList.length === 1 ? "1 guess" : guessList.length + " guesses"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (guessList.length === NUM_OF_GUESSES_ALLOWED) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  } else {
    return;
  }
}

export default EndBanner;
