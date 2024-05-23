import { useState } from "react";
import "./UserStatistics.scss";
import { NumericDisplayer } from "../NumericDisplayer/NumericDisplayer";

export function UserStatistics() {
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [healthBar, setHealthBar] = useState(0);

  window.addEventListener("gamedata", (ev) => {
    const event = ev as unknown as CustomEvent;

    setScore(event.detail.play.score);
    setAccuracy(event.detail.play.accuracy);
    setHealthBar(event.detail.play.healthBar.smooth);
  });

  return (
    <div className="user_statistics_container">
      <div className="profile_pic">
        <div className="rank_displayer country_rank_container blur_style">
          <span className="gradient_text">
            <img
              className="brflag"
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
            />
            #2
          </span>
        </div>
        <div className="rank_displayer global_rank blur_style">
          <span className="gradient_text">#220</span>
        </div>
      </div>
      <div className="statistics_wrapper">
        <div className="lifebar">
          <div
            className="fill"
            style={{
              width: `${healthBar}%`,
            }}
          ></div>
        </div>
        <div className="row">
          <NumericDisplayer value={score} itemsClass="gradient_text pop" />
          {/* <p
            className="gradient_text pop"
            data-value={score.toLocaleString("pt-BR")}
            key={score}
          >
            {score.toLocaleString("pt-BR")}
          </p> */}
        </div>
        <div className="row">
          <p className="gradient_text">
            {accuracy.toFixed(2).toLocaleString()}%
          </p>
        </div>
      </div>
    </div>
  );
}
