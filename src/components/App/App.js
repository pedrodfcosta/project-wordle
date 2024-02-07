import React from "react";
import Game from "../Game";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Header from "../Header";

function App() {
  const [guess, setGuess] = React.useState();
  const [guessList, setGuessList] = React.useState([]);

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <GuessList guessList={guessList} />
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          guessList={guessList}
          setGuessList={setGuessList}
        />
      </div>
    </div>
  );
}

export default App;
