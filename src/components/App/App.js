import Game from "../Game";
import GuessInput from "../GuessInput/GuessInput";
import Header from "../Header";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <GuessInput />
      </div>
    </div>
  );
}

export default App;

