import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import EndBanner from "../EndBanner/EndBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const gameEnded =
    guessList.length && guessList[guessList.length - 1] === answer
      ? true
      : guessList.length === NUM_OF_GUESSES_ALLOWED
      ? true
      : false;

  function handleSubmitGuess(guess) {
    setGuessList([...guessList, guess]);
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameEnded={gameEnded} />
      <EndBanner guessList={guessList} answer={answer} />
      <Keyboard guessList={guessList} answer={answer} />
    </>
  );
}

export default Game;
