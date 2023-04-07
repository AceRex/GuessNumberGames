import React, { useState } from "react";
import NumCard from "./NumberCard";
import Sound from "react-sound";
import ClickSound from "./clickSound.mp3";
import GameOver from "./gameOver.wav";
import GameWon from "./successSound.wav";
import LoadingSound from "./loadinResult.wav";

const Numbers = [0, 0, 0, 0, 0];

function RandomNumber() {
  const [UserGuesses, setUserGuesses] = useState([0, 0, 0, 0, 0]);
  const [Num1, setNum1] = useState();
  const [Num2, setNum2] = useState();
  const [Num3, setNum3] = useState();
  const [Num4, setNum4] = useState();
  const [Num5, setNum5] = useState();
  const [Result, setResult] = useState("");
  const [retry, setRetry] = useState(false);

  function Rand1() {
    return Numbers.fill(Math.floor(Math.random() * 10), 0, 1);
  }
  function Rand2() {
    return Numbers.fill(Math.floor(Math.random() * 10), 1, 2);
  }
  function Rand3() {
    return Numbers.fill(Math.floor(Math.random() * 10), 2, 3);
  }
  function Rand4() {
    return Numbers.fill(Math.floor(Math.random() * 10), 3, 4);
  }
  function Rand5() {
    return Numbers.fill(Math.floor(Math.random() * 10), 4, 5);
  }

  function handleClick(e) {
    const audio = new Audio(ClickSound);

    audio.play();
    setTimeout(() => {
      const audio = new Audio(LoadingSound);

      audio.play();
      setResult("Loading...");
    }, 900);
    setTimeout(() => {
      setNum1(Rand1());
      setNum2(Rand2());
      setNum3(Rand3());
      setNum4(Rand4());
      setNum5(Rand5());

      const NumCheck = UserGuesses.filter((number) => Numbers.includes(number));
      if (NumCheck.length >= 3) {
        const audio = new Audio(GameWon);

        audio.play();
        setResult(
          `You Won, You Got ${NumCheck.length} numbers correctly Your winning Numbers are ` +
            ` ` +
            NumCheck
        );
      } else {
        const audio = new Audio(GameOver);

        audio.play();
        setResult(
          `Lose! you got ${NumCheck.length} number correctly, Click on Retry`
        );

        setRetry(!retry);
      }
    }, 4500);

    handleAddItem();
  }

  function Replay() {
    setNum1(0);
    setNum2(0);
    setNum3(0);
    setNum4(0);
    setNum5(0);
    setResult("Click Play to start");
    setRetry(false);
  }
  const handleAddItem = (index, value) => {
    const newGuesses = [...UserGuesses];
    newGuesses[index] = value;
    setUserGuesses(newGuesses);
  };

  return (
    <div className="container text-center p-5 ">
      <h1>Play Play Lotto</h1>
      <div className="d-flex p-5 justify-content-center">
        {Numbers.map((number) => (
          <NumCard number={number} />
        ))}
      </div>
      <div className="justify-content-center">
        <h3>{Result}</h3>
      </div>
      <div className="d-flex p-5 justify-content-center">
        {[0, 1, 2, 3, 4].map((index) => (
          <input
            key={index}
            value={UserGuesses[index]}
            type="number"
            min="1"
            max="9"
            onChange={(e) => handleAddItem(index, parseInt(e.target.value))}
          />
        ))}
      </div>

      <div className="justify-content-center">
        {retry !== true ? (
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={handleClick}
          >
            {" "}
            Play{" "}
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-secondary btn-lg"
            onClick={Replay}
          >
            {" "}
            Retry{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default RandomNumber;
