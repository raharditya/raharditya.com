import React from "react";
import quotes from "./quotes.json";

export default function Home() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randInt = getRandomInt(0, 16);
  const quote = quotes[randInt];

  return (
    <div className="content-wrapper">
      <header>
        <h1>Adit Raharditya</h1>
      </header>

      <div className="content">
        <div className="content-quote">
          <div className="quote-output">
            <p>{quote.quote}</p>
            <h3>{quote.source}</h3>
          </div>
        </div>

        <div className="content-message">
          <p>
            Website coming
            <br />
            <span>real</span> soon.
          </p>
        </div>
      </div>
    </div>
  );
}
