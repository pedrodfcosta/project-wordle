import React from "react";

function GuessList({ guessList }) {
  return (
    <div class="guess-results">
      {guessList.map(({ value, id }) => {
        return (
          <p key={id} className="guess">
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
