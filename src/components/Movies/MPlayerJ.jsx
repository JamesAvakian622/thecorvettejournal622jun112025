import React from "react";
import ReactPlayer from "react-player";

export default function M4VPlayer() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.CoolJimmyCorvette.com/ZR1VetteZR1.m4v"
        controls
        width="90%"
        height="80%"
      />
    </div>
  );
}
