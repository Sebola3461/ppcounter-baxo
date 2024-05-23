import { useEffect, useRef, useState } from "react";
import { GameData, ILeaderboard } from "../../types/GameData";
import { LeaderboardPlayer } from "../LeaderboardPlayer/LeaderboardPlayer";
import "./Leaderboard.scss";

export function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<ILeaderboard[]>([]);
  const [playerName, setPlayerName] = useState("");
  const leaderboardContainer = useRef<HTMLDivElement>(null);
  const ourPlayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let latestPlayerPosition = 0;
    let animating = false;

    window.addEventListener("gamedata", (ev) => {
      const event = ev as unknown as CustomEvent<GameData>;

      if (!playerName) setPlayerName(event.detail.play.playerName);

      const ourPlayerPosition =
        event.detail.leaderboard.find(
          (p) => p.name == event.detail.play.playerName
        )?.position || 0;

      const newLeaderboard = event.detail.leaderboard
        .sort((a, b) => b.score - a.score)
        .slice(0, ourPlayerPosition > 6 ? ourPlayerPosition : 60);

      if (ourPlayerPosition < latestPlayerPosition) {
        // if (leaderboardContainer.current) {
        //   const YOffset = 43 * (ourPlayerPosition - 3);

        //   if (YOffset)
        //     leaderboardContainer.current.scrollTo({
        //       top: YOffset,
        //       behavior: "instant",
        //     });
        // }

        const ourPlayer = document.querySelector(
          '[data-ourplayer="true"]'
        ) as HTMLDivElement;

        const playerNext = document.querySelector(
          `[data-position="${latestPlayerPosition - 1}"]`
        ) as HTMLDivElement;

        if (playerNext) {
          playerNext.setAttribute("data-passed", "true");
        }

        if (ourPlayer) {
          if (
            ourPlayerPosition != 0 &&
            ourPlayerPosition != leaderboard.length
          ) {
            const animationName = String(ourPlayer.style.animation);
            ourPlayer.style.animation == "";
            ourPlayer.style.animation = animationName;
          }
        }

        animating = true;

        setTimeout(() => {
          animating = false;
        }, 250);
      } else {
        if (!animating) setLeaderboard(newLeaderboard);
      }

      latestPlayerPosition = ourPlayerPosition;
    });
  }, []);

  useEffect(() => {}, [leaderboard]);

  return (
    <div className="leaderboard" ref={leaderboardContainer}>
      {leaderboard
        .sort((a, b) => b.score - a.score)
        .map((player) => (
          <LeaderboardPlayer
            data={player}
            isOurPlayer={player.name == playerName}
            ref={player.name == playerName ? ourPlayerRef : null}
          />
        ))}
    </div>
  );
}
