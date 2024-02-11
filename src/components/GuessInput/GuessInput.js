import React from "react";

function GuessInput({ handleSubmitGuess, gameEnded }) {
  const [nextGuess, setNextGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(nextGuess);
    setNextGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameEnded}
        id="guess-input"
        type="text"
        required
        value={nextGuess}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          setNextGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
