import { useState } from "react";
import "./PerformanceCounter.scss";

export function PerformanceCounter() {
  const [pp, setPP] = useState(0);
  const [ppFc, setPPFc] = useState(0);

  window.addEventListener("gamedata", (ev) => {
    const event = ev as unknown as CustomEvent;

    setPP(event.detail.play.pp.current);
    setPPFc(event.detail.play.pp.fc);
  });

  return (
    <div className="pp_counter blur_style">
      <div className="pp_fc_container blur_style">
        <span className="gradient_text_2">{ppFc.toFixed(0)}pp</span>
      </div>
      <div className="current_pp_container">
        <span className="gradient_text">{pp.toFixed(0)}pp</span>
      </div>
    </div>
  );
}
