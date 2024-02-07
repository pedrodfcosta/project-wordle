import React from "react";

function GuessInput({ guess, setGuess, guessList, setGuessList }) {
  const [nextGuess, setNextGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        guess = nextGuess;
        setGuess(guess);
        setGuessList([...guessList, guess]);
        setNextGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        value={nextGuess}
        pattern=".{5}"
        onChange={(event) => {
          setNextGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
