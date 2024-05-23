import { useEffect } from "react";
import { UserStatistics } from "./components/UserStatistics/UserStatistics";
import { SocketManager } from "./game/SocketManager";
import { PerformanceCounter } from "./components/PerformanceCounter/PerformanceCounter";
import { Leaderboard } from "./components/Leaderboard/Leaderboard";

export function View() {
  useEffect(() => {
    new SocketManager();
  }, []);

  return (
    <div className="overlay">
      <UserStatistics />
      <PerformanceCounter />
      <Leaderboard />
    </div>
  );
}
