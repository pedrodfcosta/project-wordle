import React from "react";

function Keyboard({ guessList, answer }) {
  guessList.map((word) => {
    const keyword = word.split("");
    keyword.map((letter) => {
      // incorrect letter
      if (answer.search(letter) === -1) {
        document
          .querySelector(`[data-key="${letter}"]`)
          .classList.add("incorrect");
      }
      // correct/misplaced letter
      if (answer.search(letter) !== -1) {
        answer.search(letter) === word.indexOf(letter)
          ? document
              .querySelector(`[data-key="${letter}"]`)
              .classList.add("correct")
          : document
              .querySelector(`[data-key="${letter}"]`)
              .classList.add("misplaced");
      }
    });
  });

  return (
    <div className="keyboard">
      <p className="keyboard-line">
        <span className="key" data-key="Q">
          Q
        </span>
        <span className="key" data-key="W">
          W
        </span>
        <span className="key" data-key="E">
          E
        </span>
        <span className="key" data-key="R">
          R
        </span>
        <span className="key" data-key="T">
          T
        </span>
        <span className="key" data-key="Y">
          Y
        </span>
        <span className="key" data-key="U">
          U
        </span>
        <span className="key" data-key="I">
          I
        </span>
        <span className="key" data-key="O">
          O
        </span>
        <span className="key" data-key="P">
          P
        </span>
      </p>
      <p className="keyboard-line">
        <span className="key" data-key="A">
          A
        </span>
        <span className="key" data-key="S">
          S
        </span>
        <span className="key" data-key="D">
          D
        </span>
        <span className="key" data-key="F">
          F
        </span>
        <span className="key" data-key="G">
          G
        </span>
        <span className="key" data-key="H">
          H
        </span>
        <span className="key" data-key="J">
          J
        </span>
        <span className="key" data-key="K">
          K
        </span>
        <span className="key" data-key="L">
          L
        </span>
      </p>
      <p className="keyboard-line">
        <span className="key" data-key="Z">
          Z
        </span>
        <span className="key" data-key="X">
          X
        </span>
        <span className="key" data-key="C">
          C
        </span>
        <span className="key" data-key="V">
          V
        </span>
        <span className="key" data-key="B">
          B
        </span>
        <span className="key" data-key="N">
          N
        </span>
        <span className="key" data-key="M">
          M
        </span>
      </p>
    </div>
  );
}

export default Keyboard;
