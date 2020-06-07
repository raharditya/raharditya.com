import React from "react";
import { Helmet } from "react-helmet";

import "../components/main.css";

export default function IndexPage() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function returnQuotes() {
    const random = getRandomInt(0, 16);
    console.log(random);
    if (random === 0) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “Better to remain silent and be thought a fool than to speak out and
            remove all doubt.”
          </p>
          <h3>- Abraham Lincoln</h3>
        </div>
      );
    }
    if (random === 1) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “Nobody realizes that some people expend tremendous energy merely to
            be normal.”
          </p>
          <h3>- Albert Camus</h3>
        </div>
      );
    }
    if (random === 2) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>“You only live once, but if you do it right, once is enough.”</p>
          <h3>- Mae West</h3>
        </div>
      );
    }
    if (random === 3) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>“Always forgive your enemies; nothing annoys them so much.”</p>
          <h3>- Oscar Wilde</h3>
        </div>
      );
    }
    if (random === 4) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “Two things are infinite: the universe and human stupidity; and I'm
            not sure about the universe.”
          </p>
          <h3>- Albert Einstein</h3>
        </div>
      );
    }
    if (random === 5) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “In three words I can sum up everything I've learned about life: it
            goes on.”
          </p>
          <h3>- Robert Frost</h3>
        </div>
      );
    }
    if (random === 6) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “By the time a man realizes that his father was right, he has a son
            who thinks he’s wrong.”
          </p>
          <h3>- Charles Wadsworth</h3>
        </div>
      );
    }
    if (random === 7) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>“Remember, today is the tomorrow you worried about yesterday.”</p>
          <h3>- Dale Carnegie</h3>
        </div>
      );
    }
    if (random === 8) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “Never limit yourself because of others’ limited imagination; never
            limit others because of your own limited imagination.”
          </p>
          <h3>- Mae Jemison</h3>
        </div>
      );
    }
    if (random === 9) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “Criticism, like rain, should be gentle enough to nourish a man’s
            growth without destroying his roots.”
          </p>
          <h3>- Frank A. Clark</h3>
        </div>
      );
    }
    if (random === 10) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>“To err is human; to admit it, superhuman.”</p>
          <h3>- Doug Larsone</h3>
        </div>
      );
    }
    if (random === 11) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “A failure is like fertilizer; it stinks to be sure, but it makes
            things grow faster in the future.”
          </p>
          <h3>- Denis Waitley</h3>
        </div>
      );
    }
    if (random === 12) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “Originality is the fine art of remembering what you hear but
            forgetting where you heard it.”
          </p>
          <h3>- Laurence J. Peter</h3>
        </div>
      );
    }
    if (random === 13) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “In the end, we will remember not the words of our enemies, but the
            silence of our friends.”
          </p>
          <h3>- Martin Luther King Jr.</h3>
        </div>
      );
    }
    if (random === 14) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “Find a group of people who challenge and inspire you; spend a lot
            of time with them, and it will change your life.”
          </p>
          <h3>- Amy Poehler</h3>
        </div>
      );
    }
    if (random === 15) {
      console.log(random);
      return (
        <div className="quote-output">
          <p>
            “Once you have travelled, the voyage never ends, but is played out
            over and over again in the quietest chambers. The mind can never
            break off from the journey.”
          </p>
          <h3>- Pat Conroy</h3>
        </div>
      );
    } else {
      return (
        <div className="quote-output">
          <p></p>
          <h3></h3>
        </div>
      );
    }
  }

  return (
    <div>
      <Helmet>
        <title>Coming Soon | raharditya.com</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="{style}" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <div className="content-wrapper">
        <header>
          <h1>Adit Raharditya</h1>
        </header>

        <div className="content">
          <div className="content-quote">{returnQuotes()}</div>

          <div className="content-message">
            <p>
              Website coming
              <br />
              <span>real</span> soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
