import React from "react";

function GuessList({ guessList }) {
  return (
    <div class="guess-results">
      {guessList.map((option) => {
        return (
          <p key={Math.random()} className="guess">
            {option}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
