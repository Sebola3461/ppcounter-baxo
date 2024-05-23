import { forwardRef, Ref } from "react";
import { ILeaderboard } from "../../types/GameData";
import "./LeaderboardPlayer.scss";

export const LeaderboardPlayer = forwardRef(
  (
    props: {
      data: ILeaderboard;
      isOurPlayer: boolean;
      // getPassed: boolean;
    },
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className="leaderboard_player"
        data-ourplayer={props.isOurPlayer}
        data-position={props.data.position}
        // data-passed={props.getPassed}
        ref={ref}
      >
        <div className="profile_pic" />
        <div className="column_layout">
          <span className="username gradient_text">{props.data.name}</span>
          <span className="position gradient_text">#{props.data.position}</span>
        </div>
      </div>
    );
  }
);
